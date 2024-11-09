import { program } from "commander";
import StreamPot from '@streampot/client'
import OpenAI from 'openai'
import dotenv from 'dotenv'
import { readFileSync } from 'fs';

dotenv.config()

const STREAMPOT_TOKEN = process.env.STREAMPOT_TOKEN
const OPENAI_TOKEN = process.env.OPENAI_TOKEN
const STREAMPOT_DOCS = readFileSync('./streampot-docs.md', 'utf-8');

const streampot = new StreamPot({
    secret: process.env.STREAMPOT_TOKEN
})

const openai = new OpenAI({
    apiKey: OPENAI_TOKEN
});

program.option("-v, --video <video>", "video url");
program.option("-d, --description <description>", "description of want");

program.parse(process.argv);

const completion = await openai.chat.completions.create({
    messages: [
        {
            role: "system",
            content: `You are an expert at processing videos using StreamPot. 
Given a user request, respond ONLY with the exact StreamPot code inside JSON and with the property "code". No explanation, just JSON).
The input url is ${program.opts().video}.
The variable it is assigned to is alwats job. For example:
const job = await streampot
    .input(
        'https://download.samplelib.com/mp4/sample-5s.mp4'
    )
    .seekInput('00:00:02.000') 
    .outputOptions('-frames:v 1') 
    .output('my_image123.png')
    .runAndWait();
Never modify the url.
Always use runAndWait.
Use the following documentation as reference:
${STREAMPOT_DOCS}`
        },
        {
            role: "user",
            content: `${program.opts().description}`
        }
    ],
    model: "gpt-4o-mini",
});

const jsonString = completion.choices[0].message.content
    .replace(/```json\n/, '')  
    .replace(/\n```$/, '');    

const { code } = JSON.parse(jsonString);
try {
    const finalResult = await eval(`(async () => {
        ${code}
        return job;  // Return the job variable that's created
    })()`);
    
    if (finalResult.status === 'completed') {
        console.log(finalResult.outputs)
    } else {
        console.log('Job not completed', finalResult)
    }
} catch (error) {
    console.error('Error executing code:', error);
}
