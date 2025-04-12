import { useState } from "react";
import DatasetCard from "./DatasetCard";

const DatasetList = ({ datasets }) => {
  const [expandedDataset, setExpandedDataset] = useState(null);

  const toggleExpand = (datasetId) => {
    setExpandedDataset(expandedDataset === datasetId ? null : datasetId);
  };

  console.log("Datasets:", datasets); 

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {datasets.length} datasets found
      </h2>
      <div className="space-y-1">
        {datasets.length > 0 ? (
          datasets.map((dataset) => (
            <DatasetCard
              key={dataset.id} 
              dataset={dataset}
              isExpanded={expandedDataset === dataset.id}
              toggleExpand={toggleExpand}
            />
          ))
        ) : (
          <p>No datasets found.</p>
        )}
      </div>
    </div>
  );
};

export default DatasetList;