import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import UploadSection from "./components/upload/UploadSection";
import ResultsDashboard from "./components/dashboard/ResultsDashboard";
import Loader from "./components/common/Loader";
import ErrorAlert from "./components/common/ErrorAlert";

function App() {
  // Resume & Job Description State
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  // UI State
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    // Validation
    if (!resumeFile) {
      setError("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please paste a job description.");
      return;
    }

    setError("");
    setLoading(true);
    setShowResults(false);

    // Simulate AI analysis
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <Hero />

      <UploadSection
        resumeFile={resumeFile}
        setResumeFile={setResumeFile}
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        onAnalyze={handleAnalyze}
      />

      {error && (
        <ErrorAlert
          message={error}
          onClose={() => setError("")}
        />
      )}

      {loading && <Loader />}

      {showResults && <ResultsDashboard />}

    </div>
  );
}

export default App;