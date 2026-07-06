import { ResumeAnalysisTemplate } from "../types/ResumeAnalysis";

export function validateResponse(response) {

    const result = {
        ...ResumeAnalysisTemplate,
        ...response
    };

    result.atsScore = Number(result.atsScore) || 0;
    result.matchPercentage = Number(result.matchPercentage) || 0;

    const arrayFields = [
        "strengths",
        "weaknesses",
        "missingKeywords",
        "suggestedSkills",
        "improvedExperience",
        "improvedProjects",
        "formattingSuggestions",
        "grammarSuggestions",
        "actionVerbs"
    ];

    arrayFields.forEach(field => {
        if (!Array.isArray(result[field])) {
            result[field] = [];
        }
    });

    result.improvedSummary =
        result.improvedSummary || "";

    result.overallFeedback =
        result.overallFeedback || "";

    return result;

}