export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI Powered Resume Optimization
        </span>

        <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-slate-900">
          Improve Your ATS Score
          <span className="text-blue-600"> with AI</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-600">
          Upload your resume, paste a job description,
          and receive personalized ATS optimization
          recommendations in seconds.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold hover:bg-slate-100">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}