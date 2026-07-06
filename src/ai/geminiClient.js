import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("Gemini API Key not found.");
}

export const ai = new GoogleGenAI({
    apiKey
});