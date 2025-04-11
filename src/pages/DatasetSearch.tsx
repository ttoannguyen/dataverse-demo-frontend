import Header from '../components/Header';

export default function Dataverse() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">Tìm kiếm dữ liệu</h2>

        {/* Filter */}
        <div className="mb-4">
          <input type="text" placeholder="Tìm theo tên..." className="border p-2 w-full md:w-1/2 rounded" />
        </div>

        {/* Danh sách dữ liệu */}
        <div className="grid gap-4">
          <div className="bg-white p-4 shadow rounded-xl">
            <h4 className="font-bold">Bộ dữ liệu 1</h4>
            <p className="text-sm text-gray-600">Mô tả ngắn gọn...</p>
            <button className="mt-2 bg-primary text-white px-3 py-1 rounded hover:bg-green-700">
              Tải xuống
            </button>
          </div>

          {/* thêm nhiều dataset ở đây */}
        </div>
      </main>
    </div>
  );
}
