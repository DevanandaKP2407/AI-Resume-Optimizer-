import ATSScoreCard from "./ATSScoreCard";
import KeywordBadges from "./KeywordBadges";
import FormattingFixes from "./FormattingFixes";

import { mockData } from "../../data/mockData";

export default function ResultsDashboard() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            ATS Analysis Result
          </h2>

          <p className="mt-3 text-slate-500">
            Here's how your resume performed against the provided job description.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <ATSScoreCard score={mockData.atsScore} />

          <KeywordBadges
            keywords={mockData.missingKeywords}
          />

          <FormattingFixes
            fixes={mockData.formattingFixes}
          />

        </div>

      </div>

    </section>
  );
}