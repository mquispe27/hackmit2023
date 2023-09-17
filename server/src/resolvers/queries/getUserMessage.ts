import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Chatbot from '../../prompt/Chatbot';  // Update the path accordingly

const chatbot = new Chatbot(language, person, topic);

export const getUserMessage = (req: Request, res: Response) => {
  const response = chatbot.getChatbotResponse();
  res.status(StatusCodes.OK).json({ response });
}