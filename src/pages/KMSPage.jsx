import React from "react";
import KPIDashboard from "../components/KMS/KPIDashboard";
import MapViewer from "../components/map/MapViewer";

const KMSPage = () => {
  return (
    <div className="p-4 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800">Analysis System</h1>

      <section className="bg-white rounded-2xl shadow p-6">
        <KPIDashboard />
      </section>

      <section className="bg-white rounded-2xl shadow p-6">
        <MapViewer />
      </section>
    </div>
  );
};

export default KMSPage;
