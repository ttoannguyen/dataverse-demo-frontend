import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div>
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">KPI Dashboard</h2>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow p-4 rounded-2xl">Sản lượng 🌾</div>
          <div className="bg-white shadow p-4 rounded-2xl">Chất lượng 🌱</div>
          <div className="bg-white shadow p-4 rounded-2xl">Tiến độ 📊</div>
        </div>

        {/* Bản đồ */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Bản đồ tương tác</h3>
          <div className="h-96 bg-gray-100 rounded-2xl shadow-inner">
            {/* Bạn có thể tích hợp Leaflet hoặc Mapbox */}
          </div>
        </div>
      </main>
    </div>
  );
}
