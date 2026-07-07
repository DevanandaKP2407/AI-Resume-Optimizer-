import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

/**
 * Extract text from PDF
 */
async function extractPdfText(file) {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let page = 1; page <= pdf.numPages; page++) {
    const pdfPage = await pdf.getPage(page);

    const content = await pdfPage.getTextContent();

    const pageText = content.items
      .map(item => item.str)
      .join(" ");

    text += pageText + "\n";
  }

  return text;
}

/**
 * Extract text from DOCX
 */
async function extractDocxText(file) {
  const arrayBuffer = await file.arrayBuffer();

  const result = await mammoth.extractRawText({
    arrayBuffer,
  });

  return result.value;
}

/**
 * Clean extracted text
 */
function cleanText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Main parser function
 */
export async function extractResumeText(file) {
  const fileName = file.name.toLowerCase();

  let rawText = "";

  if (fileName.endsWith(".pdf")) {
    rawText = await extractPdfText(file);
  } else if (fileName.endsWith(".docx")) {
    rawText = await extractDocxText(file);
  } else {
    throw new Error("Unsupported file type");
  }

  return cleanText(rawText);
}
