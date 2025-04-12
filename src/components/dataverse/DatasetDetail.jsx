import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dataverseApi from '../../services/DataverseApi';

const DatasetDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathParts = location.pathname.split('/'); 
  const datasetId = pathParts[pathParts.length - 1]; 

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setLoading(true);
        const data = await dataverseApi.getData(); 
        console.log("API Response:", data); 

        if (Array.isArray(data)) {
          setDatasets(data);
          const foundDataset = data.find((dt) => dt.id === datasetId);
          console.log("Found Dataset:", foundDataset);
        } else {
          throw new Error('Invalid data format from API');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, []); 

  if (loading) {
    return (
      <div className="p-4">
        <p className="text-gray-600">Loading dataset...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  const dataset = datasets.find((ds) => ds.id === datasetId);

  if (!dataset) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">Dataset not found</h2>
        <p>The dataset with ID "{datasetId}" does not exist.</p>
      </div>
    );
  }

  const { metadata, data, type } = dataset;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate('/datasets')}
        className="mb-4 text-green-600 hover:underline"
      >
        Back to Dataset List
      </button>

      <h2 className="text-2xl font-semibold text-green-800 mb-4">{metadata.title}</h2>

      <p className="text-gray-700 mb-4">{metadata.description}</p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Metadata</h3>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Organization:</strong> {metadata.organization}</p>
        <p><strong>Country:</strong> {metadata.country}</p>
        <p><strong>Language:</strong> {metadata.language}</p>
        <p><strong>License:</strong> {metadata.license}</p>
        <p><strong>Total Records:</strong> {metadata.total_records}</p>
        <p><strong>Keywords:</strong> {metadata.keywords.join(', ')}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Data Records</h3>
        {data.length > 0 ? (
          <div className="space-y-4">
            {data.map((record, index) => (
              <div key={index} className="border p-3 rounded-lg bg-white shadow-sm">
                {type === 'population' && (
                  <>
                    <p><strong>Individual ID:</strong> {record.individual_id}</p>
                    <p><strong>District:</strong> {record.district}</p>
                    <p><strong>Age:</strong> {record.age}</p>
                    <p><strong>Gender:</strong> {record.gender}</p>
                    <p><strong>Occupation:</strong> {record.occupation}</p>
                    <p><strong>Household Size:</strong> {record.household_size}</p>
                    <p><strong>Income (VND/month):</strong> {record.income_vnd_per_month.toLocaleString()}</p>
                  </>
                )}
                {type === 'weather' && (
                  <>
                    <p><strong>Station ID:</strong> {record.station_id}</p>
                    <p><strong>Location:</strong> {record.location}</p>
                    <p><strong>Coordinates:</strong> Lat {record.coordinates.latitude}, Long {record.coordinates.longitude}</p>
                    <h4 className="font-medium mt-2">Measurements:</h4>
                    {record.measurements.map((measurement, idx) => (
                      <div key={idx} className="ml-4">
                        <p><strong>Date:</strong> {measurement.date}</p>
                        <p><strong>Temperature (°C):</strong> {measurement.temperature_celsius}</p>
                        <p><strong>Humidity (%):</strong> {measurement.humidity_percent}</p>
                        <p><strong>Rainfall (mm):</strong> {measurement.rainfall_mm}</p>
                      </div>
                    ))}
                  </>
                )}
                {type === 'agriculture' && (
                  <>
                    <p><strong>Farmer ID:</strong> {record.farmer_id}</p>
                    <p><strong>Name:</strong> {record.name}</p>
                    <p><strong>Location:</strong> {record.location}</p>
                    <p><strong>Farm Size (hectares):</strong> {record.farm_size_hectares}</p>
                    <h4 className="font-medium mt-2">Crops:</h4>
                    {record.crops.map((crop, idx) => (
                      <div key={idx} className="ml-4">
                        <p><strong>Crop Type:</strong> {crop.crop_type}</p>
                        <p><strong>Variety:</strong> {crop.variety}</p>
                        <p><strong>Season:</strong> {crop.season}</p>
                        <p><strong>Yield (tons/hectare):</strong> {crop.yield_tons_per_hectare}</p>
                        <p><strong>Irrigation Method:</strong> {crop.irrigation_method}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No data records available.</p>
        )}
      </div>
    </div>
  );
};

export default DatasetDetail;