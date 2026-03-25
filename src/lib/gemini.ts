import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const model = ai.models.get({ model: "gemini-3-flash-preview" });
