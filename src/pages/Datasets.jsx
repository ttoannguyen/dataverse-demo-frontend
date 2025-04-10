import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import mockDatasets from '../mockData';

const Datasets = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDatasets = mockDatasets.filter(dataset =>
    dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dataset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dataset.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with Filters */}
            <div className="md:w-1/4">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="mb-6">
                <SearchBar 
                  placeholder="Search datasets..." 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredDatasets.length} datasets found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDatasets.map(dataset => (
                  <Card key={dataset.id} {...dataset} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datasets;
