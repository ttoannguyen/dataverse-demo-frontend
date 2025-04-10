const Sidebar = () => {
  const countries = ['Cambodia', 'Laos', 'Myanmar', 'Thailand', 'Vietnam'];
  const sources = ['Government', 'NGO', 'Academic', 'Private Sector'];
  const topics = ['Agriculture', 'Economy', 'Environment', 'Health', 'Infrastructure'];

  return (
    <div className="w-64 p-4 bg-gray-50 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Country</h4>
        <div className="space-y-2">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={`country-${index}`} className="mr-2" />
              <label htmlFor={`country-${index}`}>{country}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Source</h4>
        <div className="space-y-2">
          {sources.map((source, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={`source-${index}`} className="mr-2" />
              <label htmlFor={`source-${index}`}>{source}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Topic</h4>
        <div className="space-y-2">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center">
              <input type="checkbox" id={`topic-${index}`} className="mr-2" />
              <label htmlFor={`topic-${index}`}>{topic}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
