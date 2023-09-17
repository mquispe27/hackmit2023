import express, { Request, Response } from "express";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import path from "path";

const router = express.Router();

const gapiCredentialsPath = path.resolve(
  __dirname,
  "../../gapi-credentials.json"
);
// Create a TextToSpeechClient instance using your service account key
const textToSpeechClient = new TextToSpeechClient({
  keyFilename: gapiCredentialsPath,
});

// Define the /generate-speech route with a custom language parameter
router.post("/generate-speech", async (req: Request, res: Response) => {
  try {
    // Extract custom language parameter from the request body
    const { text, language } = req.body;

    // Validate the language parameter
    if (!isValidLanguage(language)) {
      return res.status(400).send("Invalid language parameter.");
    }

    // Generate speech using the Text-to-Speech API without specifying the voice name
    const [response] = await textToSpeechClient.synthesizeSpeech({
      input: { text },
      voice: { languageCode: language },
      audioConfig: { audioEncoding: "MP3" },
    });

    res.send({
      audio: `data:audio/mp3;base64,${(
        response.audioContent as Buffer
      ).toString("base64")}`,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error generating speech.");
  }
});

// Define a function to check if a language is valid (customize as needed)
function isValidLanguage(language: string): boolean {
  // Add your validation logic here, e.g., check against a list of valid languages
  // Example: return validLanguages.includes(language);
  return true; // Change this to your validation logic
}

export default router;
