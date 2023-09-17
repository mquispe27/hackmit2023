import { convertTextToSpeech, playAudioBuffer } from './poc.js';

const start = async () => {
  playAudioBuffer(
    await convertTextToSpeech(
      'Hello, these are the overlords from Google Cloud commanding for your respect!!',
      'en',
    ),
  );
};

start();
