export const filterDatasets = (datasets, filters) => {
    return datasets.filter(dataset => {
      const metadata = dataset.metadata;
  
      // Lọc theo từ khóa (keyword)
      const keywordMatch = filters.keyword
        ? (metadata.title?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
           metadata.description?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
           (metadata.keywords && metadata.keywords.some(kw => kw.toLowerCase().includes(filters.keyword.toLowerCase()))))
        : true;
  
      // Lọc theo quốc gia (country)
      const countryMatch = filters.country
        ? metadata.country?.toLowerCase() === filters.country.toLowerCase()
        : true;
  
      // Lọc theo ngôn ngữ (language)
      const languageMatch = filters.language
        ? metadata.language?.toLowerCase() === filters.language.toLowerCase()
        : true;
  
      // Lọc theo định dạng (format)
      const formatMatch = filters.format
        ? metadata.format?.toLowerCase() === filters.format.toLowerCase()
        : true;
  
      // Lọc theo tổ chức (organization)
      const organizationMatch = filters.organization
        ? metadata.organization?.toLowerCase() === filters.organization.toLowerCase()
        : true;
  
      // Lọc theo chủ đề (topic)
      const topicMatch = filters.topic
        ? metadata.topic?.toLowerCase() === filters.topic.toLowerCase()
        : true;
  
      // Lọc theo giấy phép (license)
      const licenseMatch = filters.license
        ? metadata.license?.toLowerCase() === filters.license.toLowerCase()
        : true;
  
      // Trả về true nếu dataset thỏa mãn tất cả bộ lọc
      return (
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