const Card = ({ title, country, tags, year, organization, description, isPDF }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800">{title}</h3>
          {isPDF && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
              PDF
            </span>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="mr-2">{country}</span>
          <span>{year}</span>
        </div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-2">{organization}</p>
      </div>
    </div>
  );
};

export default Card;
