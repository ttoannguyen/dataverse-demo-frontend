import React, { useState, useEffect } from 'react';
import dataverseApi from '../../services/DataverseApi';

const KPIDashboard = () => {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('household');

  useEffect(() => {
    const fetchKPIs = async () => {
      try {
        setLoading(true);
        const data = await dataverseApi.getKPIs(); // Giả định API trả về dữ liệu KPI
        if (Array.isArray(data)) {
          setKpis(data);
        } else {
          throw new Error('Invalid KPI data format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKPIs();
  }, []);

  const filteredKPIs = kpis.filter((kpi) => kpi.level === selectedLevel);

  if (loading) return <div className="p-4">Loading KPIs...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">KPI Dashboard</h2>
      <div className="mb-4">
        <label className="mr-2">Select Level:</label>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="household">Household</option>
          <option value="province">Province</option>
          <option value="region">Region</option>
          <option value="national">National</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredKPIs.map((kpi) => (
          <div key={kpi.id} className="border p-4 rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold">
              {kpi.level === 'household' ? `Household ${kpi.household_id}` : kpi.location.province}
            </h3>
            <p><strong>Land Ownership:</strong> {kpi.kpis.land_ownership ? 'Yes' : 'No'}</p>
            <p><strong>Productivity:</strong> {kpi.kpis.productivity_tons_per_ha} tons/ha</p>
            <p><strong>Income:</strong> {kpi.kpis.income_vnd_per_year.toLocaleString()} VND/year</p>
            <p><strong>Value Added:</strong> {kpi.kpis.value_added_percent}%</p>
            <p><strong>Pesticide Exposure:</strong> {kpi.kpis.pesticide_exposure_times_per_year} times/year</p>
            <p><strong>Dietary Diversity:</strong> {kpi.kpis.dietary_diversity_score}</p>
            <p><strong>Women Empowerment:</strong> {kpi.kpis.women_empowerment_percent}%</p>
            <p><strong>Youth Employment:</strong> {kpi.kpis.youth_employment_percent}%</p>
            <p><strong>Agrobiodiversity:</strong> {kpi.kpis.agrobiodiversity_species_count} species</p>
            <p><strong>Soil Health Score:</strong> {kpi.kpis.soil_health_score}</p>
            <p><strong>GHG Emissions:</strong> {kpi.kpis.ghg_emissions_kg_co2e_per_ha} kg CO2e/ha</p>
            <p><strong>Water Consumption:</strong> {kpi.kpis.water_consumption_m3_per_ton} m³/ton</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIDashboard;