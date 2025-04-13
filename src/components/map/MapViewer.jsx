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

  if (loading) return <div className="p-4 text-green-700">🌀 Loading map...</div>;
  if (error) return <div className="p-4 text-red-600">❌ {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Data Map</h2>
      <MapContainer
        center={[10.0452, 105.7469]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%', borderRadius: '0.5rem', overflow: 'hidden' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {remoteSensingData.map((data) => {
          const lat = data?.location?.coordinates?.latitude;
          const lng = data?.location?.coordinates?.longitude;
          if (!lat || !lng) return null;

          return (
            <Marker key={data.id} position={[lat, lng]}>
              <Popup>
                <div className="text-sm space-y-1">
                  <h3 className="font-semibold text-green-700">{data.location.province}</h3>
                  <p><span className="font-medium">NDVI:</span> {data.measurements?.ndvi ?? 'N/A'}</p>
                  <p><span className="font-medium">Soil Moisture:</span> {data.measurements?.soil_moisture_percent ?? 'N/A'}%</p>
                  <p><span className="font-medium">Salinity Index:</span> {data.measurements?.salinity_index ?? 'N/A'}</p>
                  <p><span className="font-medium">Biomass:</span> {data.measurements?.biomass_kg_per_ha ?? 'N/A'} kg/ha</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapViewer;
