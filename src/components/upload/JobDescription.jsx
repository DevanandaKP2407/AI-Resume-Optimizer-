import { ClipboardList, X } from "lucide-react";

export default function JobDescription({
  jobDescription,
  setJobDescription,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-xl">

      {/* Header */}
      <div className="flex items-center gap-3">
        <ClipboardList
          size={30}
          className="text-blue-600"
        />

        <h2 className="text-2xl font-bold text-slate-900">
          Job Description
        </h2>
      </div>

      <p className="mt-2 text-slate-500">
        Paste the job description to compare your resume against ATS requirements.
      </p>

      {/* Text Area */}
      <textarea
        rows={12}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the complete job description here..."
        className="mt-8 w-full resize-none rounded-2xl border border-slate-300 p-5 text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {jobDescription.length} characters
        </span>

        <button
          onClick={() => setJobDescription("")}
          className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-slate-600 transition hover:bg-slate-100"
        >
          <X size={16} />
          Clear
        </button>

      </div>

    </div>
  );
}