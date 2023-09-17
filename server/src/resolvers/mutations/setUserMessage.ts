import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Chatbot from '../../prompt/Chatbot';  // Update the path accordingly

const chatbot = new Chatbot(language, person, topic);

export const setUserMessage = async (req: Request, res: Response) => {
  const { message } = req.body;
  await chatbot.setUserMessage(message);
  const response = chatbot.getChatbotResponse();
  res.status(StatusCodes.OK).json({ response });
}
