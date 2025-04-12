import React from "react";
import DatasetCard from "../components/DatasetsCard";

type DatasetRaw = {
  datasetVersion: {
    id: number;
    datasetPersistentId: string;
    metadataBlocks: {
      citation: {
        fields: any[];
      };
    };
  };
};

function extractField(fields: any[], typeName: string) {
  return fields.find((f) => f.typeName === typeName)?.value;
}

function extractDatasetData(raw: DatasetRaw) {
  const fields = raw.datasetVersion.metadataBlocks.citation.fields;
  return {
    id: raw.datasetVersion.id,
    persistentId: raw.datasetVersion.datasetPersistentId,
    title: extractField(fields, "title"),
    description: extractField(fields, "dsDescription")?.[0]?.dsDescriptionValue?.value || "",
    authors: extractField(fields, "author") || [],
    keywords: extractField(fields, "keyword") || [],
  };
}

type Props = {
  datasets: DatasetRaw[];
};

export default function DataverseSearch({ datasets }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {datasets.map((d, i) => {
        const data = extractDatasetData(d);
        return <DatasetCard key={i} {...data} />;
      })}
    </div>
  );
}
