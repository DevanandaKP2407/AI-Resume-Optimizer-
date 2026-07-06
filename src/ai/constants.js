// Gemini Model Configuration
export const GEMINI_MODEL = "gemini-2.5-flash";

// Generation Config
export const GENERATION_CONFIG = {
  temperature: 0.3,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 4096,
};

// Retry Settings
export const MAX_RETRIES = 3;
export const RETRY_DELAY = 1500;

// Default ATS Score
export const DEFAULT_SCORE = 0;