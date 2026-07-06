export function cleanJSON(text) {
  if (!text || typeof text !== "string") {
    throw new Error("Invalid AI response.");
  }

  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}