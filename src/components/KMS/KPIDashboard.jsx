import React, { useState, useEffect } from 'react';
import dataverseApi from '../../services/DataverseApi';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần cần thiết cho Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const KPIDashboard = () => {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('household');

  useEffect(() => {
    const fetchKPIs = async () => {
      try {
        setLoading(true);
        const data = await dataverseApi.getKPIs();
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

  // Dữ liệu cho biểu đồ cột (Productivity)
  const productivityData = {
    labels: filteredKPIs.map((kpi) =>
      kpi.level === 'household' ? `Household ${kpi.household_id}` : kpi.location.province
    ),
    datasets: [
      {
        label: 'Productivity (tons/ha)',
        data: filteredKPIs.map((kpi) =>
          kpi.level === 'household'
            ? kpi.kpis.productivity_tons_per_ha
            : kpi.kpis.average_productivity_tons_per_ha
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dữ liệu cho biểu đồ tròn (Land Ownership)
  const landOwnershipData = {
    labels: ['Has Land Ownership', 'No Land Ownership'],
    datasets: [
      {
        label: 'Land Ownership',
        data:
          selectedLevel === 'household'
            ? [
                filteredKPIs.filter((kpi) => kpi.kpis.land_ownership).length,
                filteredKPIs.filter((kpi) => !kpi.kpis.land_ownership).length,
              ]
            : [
                filteredKPIs.reduce((sum, kpi) => sum + kpi.kpis.land_ownership_percent, 0) /
                  filteredKPIs.length,
                100 -
                  filteredKPIs.reduce((sum, kpi) => sum + kpi.kpis.land_ownership_percent, 0) /
                    filteredKPIs.length,
              ],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  if (loading) return <div className="p-4">Loading KPIs...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">KPI Dashboard</h2>

      {/* Dropdown chọn cấp độ */}
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

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Biểu đồ cột: Productivity */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Productivity (tons/ha)</h3>
          <Bar
            data={productivityData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Productivity by Unit',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Tons/ha',
                  },
                },
              },
            }}
          />
        </div>

        {/* Biểu đồ tròn: Land Ownership */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Land Ownership Distribution</h3>
          <Pie
            data={landOwnershipData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Land Ownership Distribution',
                },
              },
            }}
          />
        </div>
      </div>

      {/* Danh sách KPI chi tiết */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredKPIs.map((kpi) => (
          <div key={kpi.id} className="border p-4 rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold">
              {kpi.level === 'household' ? `Household ${kpi.household_id}` : kpi.location.province}
            </h3>
            {kpi.level === 'household' ? (
              <>
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
              </>
            ) : (
              <>
                <p><strong>Land Ownership:</strong> {kpi.kpis.land_ownership_percent}%</p>
                <p><strong>Average Productivity:</strong> {kpi.kpis.average_productivity_tons_per_ha} tons/ha</p>
                <p><strong>Average Income:</strong> {kpi.kpis.average_income_vnd_per_year.toLocaleString()} VND/year</p>
                <p><strong>Average Value Added:</strong> {kpi.kpis.average_value_added_percent}%</p>
                <p><strong>Average Pesticide Exposure:</strong> {kpi.kpis.average_pesticide_exposure_times_per_year} times/year</p>
                <p><strong>Average Dietary Diversity:</strong> {kpi.kpis.average_dietary_diversity_score}</p>
                <p><strong>Average Women Empowerment:</strong> {kpi.kpis.average_women_empowerment_percent}%</p>
                <p><strong>Average Youth Employment:</strong> {kpi.kpis.average_youth_employment_percent}%</p>
                <p><strong>Average Agrobiodiversity:</strong> {kpi.kpis.average_agrobiodiversity_species_count} species</p>
                <p><strong>Average Soil Health Score:</strong> {kpi.kpis.average_soil_health_score}</p>
                <p><strong>Average GHG Emissions:</strong> {kpi.kpis.average_ghg_emissions_kg_co2e_per_ha} kg CO2e/ha</p>
                <p><strong>Average Water Consumption:</strong> {kpi.kpis.average_water_consumption_m3_per_ton} m³/ton</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIDashboard;