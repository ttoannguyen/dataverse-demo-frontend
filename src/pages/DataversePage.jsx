import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import SidebarFilter from "../components/dataverse/SidebarFilter";
import DatasetList from "../components/dataverse/DatasetList";
import SearchBar from "../components/dataverse/SearchBar";
import { filterDatasets } from "../lib/filterDatasets";
import dataverseApi from "../services/DataverseApi";

export default function DataversePage() {
  const [datasets, setDatasets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    country: "",
    language: "",
    format: "",
    organization: "",
    topic: "",
    license: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState({
    datasets: [],
    countries: [],
    languages: [],
    formats: [],
    organizations: [],
    topics: [],
    licenses: [],
  });
  const datasetsPerPage = 5;

  const debouncedFilter = useCallback(
    debounce((datasets, filters) => {
      const filteredData = filterDatasets(datasets, filters);
      setFiltered(filteredData);
      setCurrentPage(1); 
    }, 300),
    []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await dataverseApi.getData();
        const fetchedDatasets = response.data.datasets;
        setDatasets(fetchedDatasets);
        setFiltered(fetchedDatasets);

        const countries = [...new Set(fetchedDatasets.map(ds => ds.metadata.country))];
        const languages = [...new Set(fetchedDatasets.map(ds => ds.metadata.language))];
        const formats = [...new Set(fetchedDatasets.map(ds => ds.metadata.format))];
        const organizations = [...new Set(fetchedDatasets.map(ds => ds.metadata.organization))];
        const topics = [...new Set(fetchedDatasets.map(ds => ds.metadata.topic))];
        const licenses = [...new Set(fetchedDatasets.map(ds => ds.metadata.license))];

        setFilterOptions({
          datasets: fetchedDatasets, // Truyền danh sách datasets để tính số lượng
          countries,
          languages,
          formats,
          organizations,
          topics,
          licenses,
        });

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (datasets.length > 0) {
      debouncedFilter(datasets, filters);
    }
  }, [filters, datasets, debouncedFilter]);

  const indexOfLastDataset = currentPage * datasetsPerPage;
  const indexOfFirstDataset = indexOfLastDataset - datasetsPerPage;
  const currentDatasets = filtered.slice(indexOfFirstDataset, indexOfLastDataset);
  const totalPages = Math.ceil(filtered.length / datasetsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Loading datasets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50 min-h-screen">
      <aside className="bg-white p-4 rounded shadow-sm md:col-span-1 border">
        <SidebarFilter filters={filters} setFilters={setFilters} filterOptions={filterOptions} />
        <button
          onClick={() =>
            setFilters({
              keyword: "",
              country: "",
              language: "",
              format: "",
              organization: "",
              topic: "",
              license: "",
            })
          }
          className="mt-4 px-4 py-2 bg-indigo-900 text-white rounded w-full"
        >
          Clear Search Results
        </button>
      </aside>

      <section className="md:col-span-3">
        <SearchBar keyword={filters.keyword} setFilters={setFilters} />
        <DatasetList datasets={currentDatasets} />
        {filtered.length > datasetsPerPage && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-indigo-900 text-white rounded disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="px-3 py-1">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-indigo-900 text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}