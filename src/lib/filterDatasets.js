export const filterDatasets = (datasets, filters) => {
  return datasets.filter(dataset => {
    const metadata = dataset.metadata;

    // Lọc theo danh mục
    const categoryMatch = filters.category === "Datasets" || !filters.category;

    const keywordMatch = filters.keyword
      ? (metadata.title?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
         metadata.description?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
         (metadata.keywords && metadata.keywords.some(kw => kw.toLowerCase().includes(filters.keyword.toLowerCase()))))
      : true;

    const countryMatch = filters.country
      ? metadata.country?.toLowerCase() === filters.country.toLowerCase()
      : true;

    const languageMatch = filters.language
      ? metadata.language?.toLowerCase() === filters.language.toLowerCase()
      : true;

    const formatMatch = filters.format
      ? metadata.format?.toLowerCase() === filters.format.toLowerCase()
      : true;

    const organizationMatch = filters.organization
      ? metadata.organization?.toLowerCase() === filters.organization.toLowerCase()
      : true;

    const topicMatch = filters.topic
      ? metadata.topic?.toLowerCase() === filters.topic.toLowerCase()
      : true;

    const licenseMatch = filters.license
      ? metadata.license?.toLowerCase() === filters.license.toLowerCase()
      : true;

    return (
      categoryMatch &&
      keywordMatch &&
      countryMatch &&
      languageMatch &&
      formatMatch &&
      organizationMatch &&
      topicMatch &&
      licenseMatch
    );
  });
};
