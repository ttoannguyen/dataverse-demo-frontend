 const SearchBar = ({ keyword, setFilters }) => {
  const handleSearch = (e) => {
    setFilters(prev => ({ ...prev, keyword: e.target.value }));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="Search datasets..."
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default SearchBar;