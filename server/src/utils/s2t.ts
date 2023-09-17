const OPENAI_API_KEY = "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";
const model = "whisper-1";

import fs from "fs";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function speechToText(base64Audio: string, language?: string) {
  await fs.writeFileSync(
    "/tmp/tmp.webm",
    Buffer.from(
      base64Audio.replace("data:audio/webm;codecs=opus;base64,", ""),
      "base64"
    )
  );
  const response = await openai.audio.transcriptions.create({
    //@ts-ignore
    file: fs.createReadStream("/tmp/tmp.webm"),
    model,
    language: language,
  });
  return response.text;
}
