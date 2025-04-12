export default function SidebarFilter({ filters, setFilters, filterOptions }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select name="country" value={filters.country} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Language</label>
        <select name="language" value={filters.language} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.languages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Format</label>
        <select name="format" value={filters.format} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.formats.map(format => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Organization</label>
        <select name="organization" value={filters.organization} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.organizations.map(org => (
            <option key={org} value={org}>{org}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Topic</label>
        <select name="topic" value={filters.topic} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.topics.map(topic => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">License</label>
        <select name="license" value={filters.license} onChange={handleFilterChange} className="w-full p-2 border rounded">
          <option value="">All</option>
          {filterOptions.licenses.map(license => (
            <option key={license} value={license}>{license}</option>
          ))}
        </select>
      </div>
    </div>
  );
}