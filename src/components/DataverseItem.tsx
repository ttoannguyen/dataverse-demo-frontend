// components/DataverseItem.tsx
import { Dataset, Metadata } from "../lib/dataverseParser";

type DataverseItemProps =
  | { dataset: Dataset; metadata?: undefined }
  | { dataset?: undefined; metadata: Metadata };

export function DataverseItem({ dataset, metadata }: DataverseItemProps) {
  const meta = dataset?.metadata || metadata;

  if (!meta) return null;

  return (
    <div className="p-4 rounded-xl shadow bg-white border hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-1">{meta.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{meta.description}</p>
      <div className="flex flex-wrap gap-2">
        {(meta.keywords || []).map((kw, i) => (
          <span key={i} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}
