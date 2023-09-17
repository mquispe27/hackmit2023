import textToSpeech, { protos } from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';
const client = new textToSpeech.TextToSpeechClient({
  credentials: {
    type: 'service_account',
    // project_id: 'hackmit-2023',
    // private_key_id: '4067340a29bf2f09f3001c120eb4c321532053dd',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCj9xgB+A3YQMyA\n+g3wNZuUR+3yLle1v/4rrAkb1SQ0UFRda9Cna4gUC04b7OgQtOAEnMedIS20PZfw\nX9eV11NiwnvTMteBRIGXrk+LQLkjFsqgKn/Z5zwWUUirkHK/f6khhmzaBf1lPUie\niG2p7wUraA1FHOMB09CqsqxJIOKqLpQfo2NultB3dqbXRl5nYb251WLg00+liMh+\nPTuQ0TQZSBnsQMo1IjT5s5PDMQCr6CV8lGz0uceNWkk8wnhMsJhvNKu+hC4rA5xN\nEazsyyDdCJa0VC+aakOWNDFWwVwsBduSEkvb+XKse7K96mdc3PBhA4hJLlenWwyz\n0JvSG7zpAgMBAAECggEADbZ3moqNVd2tfMfs7H7/QPp3Cv8XNMsWzb44kMxVl850\nD9AZhjb3DX4YjTtV+Te3WItoIlsJAH76Ow84734vqh3Lz1D8NwJsuCvK2UGTejzI\nu3ZydN3i55bqtfaBskRR98zPQ7imhZYHgcK1MTYdP5EXMwWEcr2tQOlqgT8v1b2n\nPhbz6YE2rLCGhzrjPbl+tLkQABcH+/MXoPeOTL6f1cpfp8SCzAOYdGypOPjJ/Yo8\nle47bwetKuaE1X3Po90ky/3m2l0F76SufCnsW3deBHYc91p4XVw8EJrFxUsVuIKm\nnrXmOqbbgCUvYh4AjXOzWoai0wWEbriT7ugs/0u9dQKBgQDPZhmwCFEXzNn5asJn\nzegRxL5GJB+ocuACSLPr8T92KJx9vpvtvAhtorUKbA5Isdrue0iDxv2N6qCZv+Qo\nLHnd/+KJPkcX37h7pw803B8X0bJKdfSrssSUN56c2oHOi61YFzV76fR6P99XhYHJ\nGX/fShgFX42llA/6e5u7BED7xwKBgQDKY2bDldxXqTOTsynYBlCAvlBjQdyEosCF\nYJdnbgRVWB29nSAYF9a7haYjEdJ6Zt4s3KPjs6N2GBFF7g46YCpd5v9snLxNbHkg\ns9DXj/X/Dpm49I5UIbj0gMgBfvbIiuPVeu6EWRjoN4USV/bnDs563q96DecnrAYl\n6D1KMwihzwKBgQCYwJ1YzrdTbTh6AEyRAdHUDHEL3h1HBtzAMeX6eCQCleS0pIfZ\n8CzQ+w6WT4GxvvT9wuVk0VH8jXud4fxcLm3PuWCTLsBT8B3DTQbhKuLnuzWyq+/5\n6d/pPpHe+vyyMKQKhoWI74Z158dKgfVWNSa+QacxhfAgrM2b8iB//KEUDwKBgBeq\nHcb6y+PYHfbEOT1QJ7OWDTI97jn4CcjOrYVjgNA12GxmZe1LREly7CUnnVPAmXPn\nbKZgR9m0ILjrh/BddDa8ntslTINFDri7Lc02wQ3MuD6/IbFGrCiysjAyl0qFqvQ4\nRpFlFZt5em7VqEIGIjCNvzjnTUL/Q0zFZf06EGVTAoGBAJKFB197pWXkogrPO67S\n850F5JfgRJx0L4GtmqT7a4w1aJu6GIK94fo8/LYrefVwnki2KdSVAIngIfWFT/w6\nEhqmKPqfN1V58DDH9mzIIJ6/d1b4H0kiAADKJRfil1NVmR0on0mr3+IwjTxIDBCq\nGa26PTMTWRP3NUfDn//foh2L\n-----END PRIVATE KEY-----\n',
    client_email: 'translate-quickstart@hackmit-2023.iam.gserviceaccount.com',
    client_id: '106510622539976516271',
    // auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    // token_uri: 'https://oauth2.googleapis.com/token',
    // auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    // client_x509_cert_url:
    //   'https://www.googleapis.com/robot/v1/metadata/x509/translate-quickstart%40hackmit-2023.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
  },
});
console.log('GAPI', process.env);

export const convertTextToSpeech = async (text: string, language: string) => {
  const ttsRequest: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
    {
      input: { text },
      voice: { languageCode: language, ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };
  const [response] = await client.synthesizeSpeech(ttsRequest);

  if (!response.audioContent) {
    console.log('Call did not work!');
    return new Uint8Array();
  }
  console.log(response.audioContent);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
  return response.audioContent as Uint8Array;
};

export const playAudioBuffer = (buffer: Uint8Array) => {
  const blob = new Blob([buffer], { type: 'audio/mp3' });
  const url = window.URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.play();
};
