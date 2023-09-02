import OpenAI from "openai";

 export const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY, // Replace with your actual OpenAI API key
    dangerouslyAllowBrowser: true,
  });