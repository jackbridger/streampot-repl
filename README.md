This is a tool to test StreamPot using natural english that converts to stremapot/ffmpeg under the hood.

## Prerequisites:
- Node.js
- npm
- StreamPot API key
- OpenAI API key or Anthropic API key

## Run OpenAI 
```
npm run repl -- -v "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4" -d "get the first 1 second of the video"
```

## Run Claude
```
npm run repl-claude -- -v "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4" -d "get a frame for each of the first 5 seconds of the video"
```

## Example execution

```
% npm run repl-claude -- -v "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4" -d "get a frame for each of the first 5 seconds of the video"

> ffmpeg-repl@1.0.0 repl-claude
> node index-claude.js -v https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4 -d get a frame for each of the first 5 seconds of the video

(node:6451) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
{
  'frame_1.png': 'https://assets.streampot.io/9e2efb07-64ce-4d54-becb-4654f460dd2b-frame_1.png',
  'frame_10.png': 'https://assets.streampot.io/cd324067-b027-4cde-9c0b-e4f831d4014a-frame_10.png',
  'frame_2.png': 'https://assets.streampot.io/b7503a85-83ec-4d1c-ad3c-44898c2afe81-frame_2.png',
  'frame_3.png': 'https://assets.streampot.io/aaf0c7b6-1d1e-434c-b971-0a3ac932a2b4-frame_3.png',
  'frame_4.png': 'https://assets.streampot.io/01959c09-63de-4364-8228-0164f4a69021-frame_4.png',
  'frame_5.png': 'https://assets.streampot.io/d8d54a29-02f2-453d-b3d8-64e7486fc5e3-frame_5.png',
  'frame_6.png': 'https://assets.streampot.io/60642675-b56e-4000-b296-37fd4ae33e15-frame_6.png',
  'frame_7.png': 'https://assets.streampot.io/2445b2f2-9bda-4e00-96b0-880d6c7a85ba-frame_7.png',
  'frame_8.png': 'https://assets.streampot.io/304b0981-10cf-45d2-b987-aa1b16817acc-frame_8.png',
  'frame_9.png': 'https://assets.streampot.io/d814aa77-4a26-437d-9e26-03a29708c31a-frame_9.png'
}
```