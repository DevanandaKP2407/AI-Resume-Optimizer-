import { ai } from "./geminiClient";
import { GEMINI_MODEL } from "./constants";
import { buildResumePrompt } from "./prompts";
import { retry } from "./retry";
import { cleanJSON } from "../utils/cleanJSON";
import { validateResponse } from "./validateResponse";

export async function analyzeResume(resumeText, jobDescription) {

    if (!resumeText?.trim()) {
        throw new Error("Resume text is required.");
    }

    if (!jobDescription?.trim()) {
        throw new Error("Job description is required.");
    }

    const prompt = buildResumePrompt(
        resumeText,
        jobDescription
    );

    const response = await retry(async () => {

        const result = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt
        });

        return result;

    });

    const rawText = response.text;

    const cleaned = cleanJSON(rawText);

    const parsed = JSON.parse(cleaned);

    return validateResponse(parsed);

}