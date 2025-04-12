import { useState } from "react";

export default function DatasetList({ datasets }) {
  const [expandedDataset, setExpandedDataset] = useState(null);

  const toggleExpand = (datasetId) => {
    setExpandedDataset(expandedDataset === datasetId ? null : datasetId);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{datasets.length} datasets found</h2>
      <div className="space-y-4">
        {datasets.length > 0 ? (
          datasets.map(dataset => (
            <div key={dataset.id} className="p-4 bg-white rounded shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-indigo-900">{dataset.metadata.title}</h3>
                  <p className="text-gray-600">{dataset.metadata.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <span>Country: {dataset.metadata.country}</span> |{" "}
                    <span>Topic: {dataset.metadata.topic}</span> |{" "}
                    <span>Organization: {dataset.metadata.organization}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(dataset.id)}
                  className="text-indigo-600 hover:underline"
                >
                  {expandedDataset === dataset.id ? "Hide Details" : "Show Details"}
                </button>
              </div>

              {expandedDataset === dataset.id && (
                <div className="mt-4">
                  {dataset.type === "population" && (
                    <div>
                      <h4 className="font-medium">Population Data:</h4>
                      <ul className="list-disc pl-5">
                        {dataset.data.map(individual => (
                          <li key={individual.individual_id}>
                            {individual.individual_id}: {individual.district}, Age: {individual.age}, Occupation: {individual.occupation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {dataset.type === "weather" && (
                    <div>
                      <h4 className="font-medium">Weather Stations:</h4>
                      {dataset.data.map(station => (
                        <div key={station.station_id} className="ml-4">
                          <p>Station: {station.station_id} ({station.location})</p>
                          <ul className="list-disc pl-5">
                            {station.measurements.map((m, idx) => (
                              <li key={idx}>
                                {m.date}: Temp: {m.temperature_celsius}°C, Humidity: {m.humidity_percent}%, Rainfall: {m.rainfall_mm}mm
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {dataset.type === "agriculture" && (
                    <div>
                      <h4 className="font-medium">Farmers:</h4>
                      {dataset.data.map(farmer => (
                        <div key={farmer.farmer_id} className="ml-4">
                          <p>Farmer: {farmer.name} ({farmer.location})</p>
                          <ul className="list-disc pl-5">
                            {farmer.crops.map((crop, idx) => (
                              <li key={idx}>
                                {crop.crop_type} ({crop.variety}): Yield: {crop.yield_tons_per_hectare}t/ha, Season: {crop.season}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No datasets found.</p>
        )}
      </div>
    </div>
  );
}