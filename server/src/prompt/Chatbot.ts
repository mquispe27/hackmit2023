import OpenAI from "openai";
import * as dotenv from "dotenv";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

dotenv.config();

class Chatbot {
    language: string;
    person: string;
    topic: string;
    messages: ChatCompletionMessageParam[];
    openai: OpenAI;
    lastResponse: string | null = null;

    constructor(language: string, person: string, topic: string) {
        this.language = language;
        this.person = person;
        this.topic = topic;

        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.messages = [];

        // Sending the initial message to set the context
        this.setUserMessage(`you are going to help me practice my ${this.language} and I would like you to pretend to be ${this.person} from history; make sure you are historically accurate; please respond in the ${this.language}. I would like to talk about ${this.topic}. what do you think about ${this.topic}?`);
    }

    async setUserMessage(userMessage: string): Promise<void> {
        const message: ChatCompletionMessageParam = {
            role: "user",
            content: userMessage,
        };
        this.messages.push(message);

        // Get the response from OpenAI
        const completion = await this.openai.chat.completions.create({
            messages: this.messages,
            model: "gpt-3.5-turbo",
        });

        const responseMessage = completion.choices[0].message;
        if (responseMessage) {
            this.lastResponse = responseMessage.content;
            this.messages.push({
                role: responseMessage.role,
                content: responseMessage.content,
            });
        }
    }

    getChatbotResponse(): string | null {
        return this.lastResponse;
    }
}
