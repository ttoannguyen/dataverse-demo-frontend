import React from 'react';
import KPIDashboard from '../components/KMS/KPIDashboard';
import MapViewer from '../components/map/MapViewer';
// import DataCollectionForm from '../components/DataCollectionForm';

const KMSPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Knowledge Management System
      </h1>

      {/* Phần hiển thị KPI */}
      <section className="mb-8">
        <KPIDashboard />
      </section>

      {/* Phần hiển thị bản đồ không gian */}
      <section className="mb-8">
        <MapViewer />
      </section>

      {/* Phần thu thập dữ liệu khảo sát */}
      {/* <section>
        <DataCollectionForm />
      </section> */}
    </div>
  );
};

export default KMSPage;