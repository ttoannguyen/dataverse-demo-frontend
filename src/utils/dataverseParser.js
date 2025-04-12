export const parseDataverse = (raw) => {
    return raw.map((entry) => {
      const citation = entry.datasetVersion.metadataBlocks.citation;
      const fields = Object.fromEntries(citation.fields.map((f) => [f.typeName, f.value]));
  
      const authors = (fields.author || []).map((a) => ({
        name: a.authorName?.value || "",
        affiliation: a.authorAffiliation?.value || "",
      }));
  
      return {
        id: entry.datasetVersion.id,
        persistentId: entry.datasetVersion.datasetPersistentId,
        title: fields.title || "Không có tiêu đề",
        description: fields.dsDescription?.[0]?.dsDescriptionValue?.value || "",
        keywords: (fields.keyword || []).map((kw) => kw.keywordValue),
        authors,
        createdAt: entry.datasetVersion.createTime,
      };
    });
  };
  