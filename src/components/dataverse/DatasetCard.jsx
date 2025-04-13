import { useNavigate } from "react-router-dom";

const DatasetCard = ({ dataset, isExpanded, toggleExpand }) => {
  const navigate = useNavigate();

  
  const title = dataset.metadata.title;
  const description = dataset.metadata.description;
  const keywords = dataset.metadata.keywords || []; 
  const organization = dataset.metadata.organization || "Unknown"; 

  return (
    <div className="border p-4  bg-white hover:bg-gray-50 transition">
     
      <h3
        onClick={() => navigate(`/datasets/${dataset.id}`)} 
        className="hover:underline cursor-pointer text-xl font-semibold text-blue-700"
      >
        {title}
      </h3>


      <p className="text-sm text-gray-600 italic mb-2">Published by: {organization}</p>

      {/* Mô tả dataset */}
      <p className="text-gray-700 mb-2">{description}</p>


      <div className="flex flex-wrap gap-2 text-sm mb-2">
        {keywords.length > 0 ? (
          keywords.map((kw, i) => (
            <span key={i} className="bg-blue-100  px-2 py-1 rounded-full">
              #{kw}
            </span>
          ))
        ) : (
          <span className="text-gray-500">No keywords available</span>
        )}
      </div>

      {/* Nút mở rộng/thu gọn */}
      <button
        onClick={() => toggleExpand(dataset.id)}
        className="text-blue-500 hover:underline text-sm"
      >
        {isExpanded ? "Hide Details" : "Show Details"}
      </button>

      {/* Hiển thị chi tiết khi mở rộng */}
      {isExpanded && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <p><strong>Type:</strong> {dataset.type}</p>
          <p><strong>Country:</strong> {dataset.metadata.country}</p>
          <p><strong>Language:</strong> {dataset.metadata.language}</p>
          <p><strong>License:</strong> {dataset.metadata.license}</p>
          <p><strong>Total Records:</strong> {dataset.metadata.total_records}</p>
        </div>
      )}
    </div>
  );
};

export default DatasetCard;