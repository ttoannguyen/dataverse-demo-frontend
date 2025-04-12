const DatasetCard = ({ dataset }) => {
  return (
    <div className="border p-4 rounded-xl shadow bg-white hover:bg-gray-50 transition">
      <h3 className="text-xl font-semibold text-green-800">{dataset.title}</h3>
      <p className="text-sm text-gray-600 italic mb-2">
        {dataset.authors.map((a) => a.name).join(", ")}
      </p>
      <p className="text-gray-700 mb-2">{dataset.description}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        {dataset.keywords.map((kw, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 px-2 py-1 rounded-full"
          >
            #{kw}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DatasetCard;
