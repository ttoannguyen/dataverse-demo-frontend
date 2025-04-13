// components/dataverse/SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ keyword = "", setFilters, className }) => {
  const [inputValue, setInputValue] = useState(keyword);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (setFilters) {
      setFilters((prev) => ({ ...prev, keyword: value }));
    }
  };

  const handleSearch = () => {
    if (!setFilters && inputValue) {
      navigate(`/dataverse?keyword=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div className={`${className }`}>
      <div className="flex items-center overflow-hidden border">
        <input
          type="text"
          placeholder="Search all dataverses..."
          className="flex-1 px-3 py-2 text-sm focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-200 hover:bg-gray-300 p-3"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
