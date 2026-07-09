import { CheckCircle2 } from "lucide-react";

export default function FormattingFixes({ fixes }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl transition">

      <h3 className="mb-8 text-2xl font-bold">
        Recommended Fixes
      </h3>

      <ul className="space-y-5">

        {fixes.map((fix) => (
          <li
            key={fix}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              className="mt-1 text-green-600"
              size={20}
            />

            <span>{fix}</span>

          </li>
        ))}

      </ul>

    </div>
  );
}