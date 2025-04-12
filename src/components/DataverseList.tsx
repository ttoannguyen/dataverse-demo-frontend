// components/DataverseList.tsx
import { Dataset, Metadata } from "../lib/dataverseParser";
import { DataverseItem } from "./DataverseItem";

type DataverseListProps = {
  datasets: Dataset[];
  metadataList: Metadata[];
};

export function DataverseList({ datasets, metadataList }: DataverseListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {datasets.map((dataset, index) => (
        <DataverseItem key={`dataset-${index}`} dataset={dataset} />
      ))}

      {metadataList.map((metadata, index) => (
        <DataverseItem key={`metadata-${index}`} metadata={metadata} />
      ))}
    </div>
  );
}
