import React from "react";

type Author = {
  authorName: { value: string };
  authorAffiliation?: { value: string };
};

type DatasetProps = {
  id: number;
  title: string;
  description: string;
  authors: Author[];
  keywords?: string[];
  persistentId: string;
};

export default function DatasetCard({
  title,
  description,
  authors,
  keywords,
  persistentId,
}: DatasetProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

      <div className="text-sm">
        <strong>Tác giả:</strong>{" "}
        {authors.map((a, i) => (
          <span key={i}>
            {a.authorName.value}
            {a.authorAffiliation?.value && ` (${a.authorAffiliation.value})`}
            {i < authors.length - 1 && ", "}
          </span>
        ))}
      </div>

      {Array.isArray(keywords) && keywords.length > 0 && (
  <div className="text-sm text-gray-700">
    <strong>Từ khóa:</strong>{" "}
    {keywords.map((kw, i) => (
      <span
        key={i}
        className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded mr-1"
      >
        {kw}
      </span>
    ))}
  </div>
)}


      <a
        href={`https://doi.org/${persistentId.replace("doi:", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-blue-600 hover:underline mt-2"
      >
        Xem chi tiết
      </a>
    </div>
  );
}
