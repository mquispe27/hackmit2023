import express, { Request, Response } from "express";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import path from "path";
import { PersonProfile } from "@/prompt/Chatbot";

const router = express.Router();

const gapiCredentialsPath = path.resolve(
  __dirname,
  "../../gapi-credentials.json"
);
// Create a TextToSpeechClient instance using your service account key
const textToSpeechClient = new TextToSpeechClient({
  keyFilename: gapiCredentialsPath,
});

export async function convertTextToSpeech(
  text: string,
  language: string,
  personProfile: PersonProfile
) {
  try {
    if (!isValidLanguage(language)) {
      console.log("INVALID LANGUAGE");
      return null;
    }

    // Generate speech using the Text-to-Speech API without specifying the voice name
    const [response] = await textToSpeechClient.synthesizeSpeech({
      input: { text },
      voice: { languageCode: language, ...personProfile },
      audioConfig: { audioEncoding: "MP3" },
    });

    return `data:audio/mp3;base64,${(response.audioContent as Buffer).toString(
      "base64"
    )}`;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Define a function to check if a language is valid (customize as needed)
function isValidLanguage(language: string): boolean {
  // Add your validation logic here, e.g., check against a list of valid languages
  // Example: return validLanguages.includes(language);
  return true; // Change this to your validation logic
}

export default router;
