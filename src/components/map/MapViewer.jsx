import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dataverseApi from '../../services/DataverseApi';

const MapViewer = () => {
  const [remoteSensingData, setRemoteSensingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRemoteSensingData = async () => {
      try {
        setLoading(true);
        const data = await dataverseApi.getRemoteSensingData();
        if (Array.isArray(data)) {
          setRemoteSensingData(data);
        } else {
          throw new Error('Invalid remote sensing data format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRemoteSensingData();
  }, []);

  if (loading) return <div className="p-4">Loading map...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">Spatial Data Map</h2>
      <MapContainer center={[10.0452, 105.7469]} zoom={8} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {remoteSensingData.map((data) => (
          <Marker
            key={data.id}
            position={[data.location.coordinates.latitude, data.location.coordinates.longitude]}
          >
            <Popup>
              <div>
                <h3>{data.location.province}</h3>
                <p><strong>NDVI:</strong> {data.measurements.ndvi}</p>
                <p><strong>Soil Moisture:</strong> {data.measurements.soil_moisture_percent}%</p>
                <p><strong>Salinity Index:</strong> {data.measurements.salinity_index}</p>
                <p><strong>Biomass:</strong> {data.measurements.biomass_kg_per_ha} kg/ha</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapViewer;