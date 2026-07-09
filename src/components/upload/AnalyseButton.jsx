export default function AnalyzeButton({ onAnalyze }) {
  return (
    <button
      type="button"
      onClick={onAnalyze}
      className="
        flex items-center gap-3
        rounded-2xl
        bg-blue-600
        px-10
        py-4
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:bg-blue-700
        hover:shadow-xl
        active:scale-95
      "
    >
      Analyze Resume
    </button>
  );
}