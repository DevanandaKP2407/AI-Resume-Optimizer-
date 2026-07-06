export const buildResumePrompt = (resumeText, jobDescription) => `
You are an expert ATS (Applicant Tracking System), Senior Technical Recruiter, Resume Reviewer, and Career Coach.

Your task is to analyze the candidate's resume against the provided job description.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT wrap the response inside \`\`\`json.
4. Do NOT explain anything.
5. Every field must be present.
6. Arrays must always be arrays.
7. Numbers must be numbers.
8. Never return null.
9. Never return undefined.

--------------------------------------------------

RESUME

${resumeText}

--------------------------------------------------

JOB DESCRIPTION

${jobDescription}

--------------------------------------------------

Analyze the resume on the following criteria:

• ATS compatibility
• Skill match
• Missing keywords
• Technical skills
• Soft skills
• Resume summary
• Work experience
• Projects
• Grammar
• Formatting
• Quantified achievements
• Action verbs
• Resume strength
• Resume weaknesses

--------------------------------------------------

SCORING RULES

ATS Score:
0-100

Match Percentage:
0-100

--------------------------------------------------

Return EXACTLY this JSON format:

{
  "atsScore": 0,
  "matchPercentage": 0,

  "strengths": [],

  "weaknesses": [],

  "missingKeywords": [],

  "suggestedSkills": [],

  "improvedSummary": "",

  "improvedExperience": [],

  "improvedProjects": [],

  "formattingSuggestions": [],

  "grammarSuggestions": [],

  "actionVerbs": [],

  "overallFeedback": ""
}

FIELD RULES

atsScore:
overall ATS score.

matchPercentage:
how well the resume matches the job.

strengths:
5-10 strengths.

weaknesses:
5-10 weaknesses.

missingKeywords:
keywords found in JD but absent in resume.

suggestedSkills:
skills candidate should learn/add.

improvedSummary:
rewrite the resume summary professionally.

improvedExperience:
rewrite experience bullets using action verbs and quantified achievements.

improvedProjects:
rewrite project descriptions professionally.

formattingSuggestions:
suggest formatting improvements.

grammarSuggestions:
grammar corrections.

actionVerbs:
suggest powerful action verbs.

overallFeedback:
around 150 words summarizing the resume.
`;