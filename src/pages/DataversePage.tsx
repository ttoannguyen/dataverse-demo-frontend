// src/pages/DataversePage.tsx
import { useEffect, useState, useMemo } from "react";
import { mapDatasets, mapMetadata, Dataset, Metadata } from "../lib/dataverseParser";
import { Sidebar } from "../components/DataverseSidebar";
import { DataverseList } from "../components/DataverseList";
import { SearchBar } from "../components/SearchBar";
import datasetsRaw from "../data/datasets.json";
import metadataRaw from "../data/metadata.json";
import { Console } from "console";

export default function DataversePage() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [metadataList, setMetadataList] = useState<Metadata[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  console.log("datasets",datasetsRaw, metadataRaw);
  useEffect(() => {
    const mappedDatasets = mapDatasets(datasetsRaw);
    const mappedMetadata = mapMetadata(metadataRaw);
    console.log("==",mappedDatasets, mappedMetadata)
    setDatasets(mappedDatasets);
    setMetadataList(mappedMetadata);
  }, []);

  const filteredDatasets = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase();
    return datasets.filter((d) => {
      const meta = d.metadata;
      if (!meta) return false;

      const matchesQuery = null;
        // meta.title?.toLowerCase().includes(lowerSearch) ||
        // meta.description?.toLowerCase().includes(lowerSearch);

      const matchesKeywords =
        selectedKeywords.length === 0 ||
        selectedKeywords.some((kw) => meta.keywords?.includes(kw));

      return matchesQuery && matchesKeywords;
    });
  }, [searchQuery, selectedKeywords, datasets]);

  const filteredMetadata = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase();
    return metadataList.filter((m) => {
      const matchesQuery =
        m.title.toLowerCase().includes(lowerSearch) ||
        m.description.toLowerCase().includes(lowerSearch);

      const matchesKeywords =
        selectedKeywords.length === 0 ||
        selectedKeywords.some((kw) => m.keywords?.includes(kw));

      return matchesQuery && matchesKeywords;
    });
  }, [searchQuery, selectedKeywords, metadataList]);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        datasets={datasets}
        selectedKeywords={selectedKeywords}
        setSelectedKeywords={setSelectedKeywords}
      />

      <div className="flex-1 p-6 space-y-6">
        <SearchBar
          value={searchQuery}
          onChange={(value) => setSearchQuery(value)}
        />

        {(filteredDatasets.length === 0 && filteredMetadata.length === 0) ? (
          <p className="text-gray-500">No results found. Try adjusting your filters.</p>
        ) : (
          <DataverseList datasets={filteredDatasets} metadataList={filteredMetadata} />
        )}
      </div>
    </div>
  );
}
