export async function fetchMergedDatasets() {
  const [datasetsRes, metadataRes] = await Promise.all([
    fetch("/src/data/datasets.json"),
    fetch("/src/data/metadata.json"),
  ]);

  const datasets = await datasetsRes.json();
  const metadata = await metadataRes.json();
  
  // Create a mapping of persistentId to metadata for quick lookup
  const metadataMap = metadata.reduce((map, item) => {
    map[item.persistentId] = item;
    return map;
  }, {});

  // Merge datasets with corresponding metadata
  const merged = datasets.map((dataset) => ({
    ...dataset,
    metadata: metadataMap[dataset.persistentId] || {},
  }));

  return merged;
}
