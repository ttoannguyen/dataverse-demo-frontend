import { FaDatabase, FaFileAlt, FaGavel, FaUser, FaMapMarkerAlt } from "react-icons/fa";

export default function SidebarFilter({ filters, setFilters, filterOptions }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const searchResults = [
    {
      name: "Datasets",
      count: filterOptions?.datasets?.length || 0,
      icon: <FaDatabase />,
    },
    { name: "Library", count: 1366, icon: <FaFileAlt /> },
    { name: "Laws", count: 175, icon: <FaGavel /> },
    { name: "Profiles", count: 4, icon: <FaUser /> },
    { name: "Maps", count: 6, icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className="space-y-4">
      {/* Phần "Search Result For" */}
      <div>
        <h2 className="font-semibold text-gray-700 mb-2">Search Result For</h2>
        <ul className="space-y-2">
          {searchResults.map((result) => (
            <li key={result.name} className="flex items-center text-gray-700">
              <span className="mr-2">{result.icon}</span>
              <button
                onClick={() => handleCategoryChange(result.name)}
                className={`${
                  filters.category === result.name
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700"
                } hover:underline`}
              >
                {result.name} ({result.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bộ lọc hiện tại */}
      <div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.countries || []).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              name="language" // Sửa từ "country" thành "language"
              value={filters.language} // Sửa từ "languages" thành "language"
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.languages || []).map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Format</label>
            <select
              name="format"
              value={filters.format}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.formats || []).map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <select
              name="organization"
              value={filters.organization}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.organizations || []).map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Topic</label>
            <select
              name="topic"
              value={filters.topic}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.topics || []).map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">License</label>
            <select
              name="license"
              value={filters.license}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {(filterOptions?.licenses || []).map((license) => (
                <option key={license} value={license}>
                  {license}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}