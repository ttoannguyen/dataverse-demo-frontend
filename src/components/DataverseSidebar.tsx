// components/Sidebar.tsx
import { Dataset } from "../lib/dataverseParser";

type SidebarProps = {
  datasets: Dataset[];
  selectedKeywords: string[];
  setSelectedKeywords: (keywords: string[]) => void;
};

export function Sidebar({ datasets, selectedKeywords, setSelectedKeywords }: SidebarProps) {
  const keywords = Array.from(new Set(datasets.flatMap(d => d.metadata.keywords || [])));

  const toggleKeyword = (kw: string) => {
    setSelectedKeywords(
      selectedKeywords.includes(kw)
        ? selectedKeywords.filter(k => k !== kw)
        : [...selectedKeywords, kw]
    );
  };

  return (
    <div className="w-64 p-4 border-r bg-gray-50 space-y-2">
      <h2 className="text-lg font-semibold mb-2">Lọc theo từ khóa</h2>
      {keywords.map((kw) => (
        <button
          key={kw}
          className={`px-3 py-1 text-sm rounded-full mr-2 mb-2 ${
            selectedKeywords.includes(kw)
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => toggleKeyword(kw)}
        >
          {kw}
        </button>
      ))}
    </div>
  );
}
