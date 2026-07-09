import { useRef } from "react";
import { Upload, FileText, CheckCircle2 } from "lucide-react";

export default function ResumeUpload({
  resumeFile,
  setResumeFile,
}) {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setResumeFile(event.target.files[0]);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-xl">

      <h2 className="text-2xl font-bold text-slate-900">
        Upload Resume
      </h2>

      <p className="mt-2 text-slate-500">
        Upload your resume in PDF or DOCX format.
      </p>

      <div className="mt-8 rounded-2xl border-2 border-dashed border-blue-300 bg-slate-50 p-12 text-center transition hover:border-blue-600 hover:bg-blue-50">

        <div className="flex justify-center">
          <Upload
            size={64}
            className="text-blue-600"
          />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-slate-800">
          Drag & Drop your resume here
        </h3>

        <p className="mt-2 text-slate-500">
          or click below to browse files
        </p>

        <button
          onClick={handleBrowseClick}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Files
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />

      </div>

      {resumeFile && (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

          <div className="flex items-center gap-3">

            <CheckCircle2
              className="text-emerald-600"
              size={24}
            />

            <div>

              <p className="font-semibold text-emerald-700">
                Resume Uploaded Successfully
              </p>

              <div className="mt-1 flex items-center gap-2 text-slate-700">

                <FileText size={18} />

                <span>{resumeFile.name}</span>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}