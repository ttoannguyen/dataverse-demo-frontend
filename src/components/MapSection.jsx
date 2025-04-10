const MapSection = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <div className="bg-gray-300 w-full h-64 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Explore the Mekong Region</h3>
        <p className="text-gray-600">
          Interactive map showing key development indicators across the region
        </p>
      </div>
    </div>
  );
};

export default MapSection;
