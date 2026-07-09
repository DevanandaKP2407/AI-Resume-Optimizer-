import ResumeUpload from "./ResumeUpload";
import JobDescription from "./JobDescription";
import AnalyzeButton from "./AnalyzeButton";

export default function UploadSection({
  resumeFile,
  setResumeFile,
  jobDescription,
  setJobDescription,
  onAnalyze,
}) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Optimize Your Resume
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Upload your resume and paste the job description to receive an AI-powered ATS analysis.
          </p>
        </div>

        {/* Upload + Job Description */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          <ResumeUpload
            resumeFile={resumeFile}
            setResumeFile={setResumeFile}
          />

          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />

        </div>

        {/* Analyze Button */}
        <div className="mt-12 flex justify-center">
          <AnalyzeButton onAnalyze={onAnalyze} />
        </div>

      </div>
    </section>
  );
}