import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ATSScoreCard({ score }) {
  const getStatus = () => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  const getColor = () => {
    if (score >= 80) return "#16a34a";
    if (score >= 60) return "#f59e0b";
    return "#dc2626";
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition">

      <h3 className="mb-8 text-center text-2xl font-bold">
        ATS Score
      </h3>

      <div className="mx-auto h-44 w-44">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: getColor(),
            trailColor: "#e5e7eb",
            textColor: getColor(),
            textSize: "18px",
          })}
        />
      </div>

      <p
        className="mt-8 text-center text-lg font-semibold"
        style={{ color: getColor() }}
      >
        {getStatus()}
      </p>

    </div>
  );
}