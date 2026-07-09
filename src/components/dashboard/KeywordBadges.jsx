import { AlertTriangle } from "lucide-react";

export default function KeywordBadges({ keywords }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition">

      <h3 className="mb-8 text-2xl font-bold">
        Missing Keywords
      </h3>

      <div className="flex flex-wrap gap-3">

        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 font-medium text-red-700"
          >
            <AlertTriangle size={16} />
            {keyword}
          </span>
        ))}

      </div>

    </div>
  );
}