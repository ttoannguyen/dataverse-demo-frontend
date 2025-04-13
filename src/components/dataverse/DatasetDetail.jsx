import React, { useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import dataverseApi from "../../services/DataverseApi";
import "../../assets/icon/fontawesome/css/all.min.css";
import defaultFile from "../../assets/img/muti_file_icon.png";

const DatasetDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [datasets, setDatasets] = useState([]);
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pathParts = location.pathname.split("/");
  const datasetId = pathParts[pathParts.length - 1];
  const [isOpen, setIsOpen] = useState(false);
  const [accessIsOpen, setAccessIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setLoading(true);
        const data = await dataverseApi.getDataById(datasetId);
        console.log(data);

        setDataset(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDatasets();
  }, [datasetId]);

  if (loading) {
    return (
      <div className="p-4">
        <p className="text-gray-600">Loading dataset...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">
          Dataset not found
        </h2>
        <p>The dataset with ID "{datasetId}" does not exist.</p>
      </div>
    );
  }

  const { metadata, data, type } = dataset;
  console.log(dataset);

  return (
    <>
      <div className="p-4">
        <div>
          <Link className="">
            Lowy Institute Being Chinese in Australia Dataverse
          </Link>
          <p>(Lowy Institute)</p>
        </div>

        <div>Lowy Institute Being Chinese in Australia Dataverse</div>

        <h1>{metadata.title}</h1>
        <p>Version 1.0</p>
        <div className="grid grid-cols-[75%_25%] gap-4">
          <div class=" p-4  text-sm">
            <div className="custom-light-blue grid grid-cols-[15%_85%] ">
              <div className="w-full text-xl">
                <img src={defaultFile} alt="" />
              </div>
              <div>
                <div>
                  Hsu, Jennifer, 2025, "Being Chinese in Australia 2021
                  release",
                  <Link to={"https://doi.org/10.26193/ZPBVNW"}>
                    {" "}
                    https://doi.org/10.26193/ZPBVNW
                  </Link>
                  , ADA Dataverse, V1
                </div>

                <div className="grid grid-cols-[30%_70%] ">
                  <div class=" p-4">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={toggleDropdown}
                        className="cursor-pointer"
                      >
                        Menu
                      </button>

                      {isOpen && (
                        <div className="absolute z-10 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg">
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Option 1
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Option 2
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            Option 3
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div class="text-left p-4">
                    Learn about Data Citation Standards.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className=" grid grid-cols-[25%_75%] gap-4">
                <div className="">Description</div>
                <div>
                  The Australian Survey of Social Attitudes (AuSSA) is
                  Australia’s main source of data for the scientific study of
                  the social attitudes, beliefs and opinions of Australians, how
                  they change over time, and how they compare with other
                  societies. The survey is used to help researchers better
                  understand how Australians think and feel about their lives.
                  It produces important information about the changing views and
                  attitudes of Australians as we move through the 21st century.
                  Similar surveys are run in other countries, so data from the
                  AuSSA also allows us to compare Australia with countries all
                  over the world. The aims of the survey are to discover: the
                  range of Australians’ views on topics that are important to
                  all of us; how these views differ for people in different
                  circumstances; how they have changed over the past quarter
                  century; and how they compare with people in other countries.
                  AuSSA is also the Australian component of the International
                  Social Survey Project (ISSP). The ISSP is a cross-national
                  collaboration on surveys covering important topics. Each year,
                  survey researchers in some 40 countries each do a national
                  survey using the same questions. The ISSP focuses on a special
                  topic each year, repeating that topic from time to time. The
                  topic for the 2021 survey is "Health and Healthcare". This is
                  the second time this has been the topic of the survey, having
                  previously been the theme for the survey in 2011. The data
                  from questions in sections B, C, D, E, F and G are embargoed
                  until 1 January 2025.
                </div>
              </div>

              <div className=" mt-4 grid grid-cols-[25%_75%] gap-4">
                <div className="">Subject</div>
                <div>Social Sciences</div>
              </div>

              <div className="mt-4 grid grid-cols-[25%_75%] gap-4">
                <div className="">Related Publication </div>
                <div>
                  Publications using AuSSA Data or citing AuSSA url:
                  https://www.acspri.org.au/aussa/publications
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[25%_75%] gap-4">
                <div className="">License/Data Use Agreement</div>
                <div>Custom Dataset Terms</div>
              </div>
            </div>
          </div>
          <div class="bg-blue-100 p-4">
            <div className="relative inline-block text-left">
              <button
                onClick={() => setAccessIsOpen(!accessIsOpen)}
                className="cursor-pointer"
              >
                Menu
              </button>

              {accessIsOpen && (
                <div className="absolute z-10 mt-2 w-44 bg-white border border-gray-200 rounded shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-blue-100 flex justify-center items-center">
                Contact Owner
              </div>
              <div className="bg-red-100 flex justify-center items-center">
                Share
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => navigate("/datasets")}
          className="mb-4 text-green-600 hover:underline"
        >
          Back to Dataset List
        </button>

        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          {metadata.title}
        </h2>

        <p className="text-gray-700 mb-4">{metadata.description}</p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">Metadata</h3>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Organization:</strong> {metadata.organization}
          </p>
          <p>
            <strong>Country:</strong> {metadata.country}
          </p>
          <p>
            <strong>Language:</strong> {metadata.language}
          </p>
          <p>
            <strong>License:</strong> {metadata.license}
          </p>
          <p>
            <strong>Total Records:</strong> {metadata.total_records}
          </p>
          <p>
            <strong>Keywords:</strong> {metadata.keywords.join(", ")}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Data Records</h3>
          {data.length > 0 ? (
            <div className="space-y-4">
              {data.map((record, index) => (
                <div
                  key={index}
                  className="border p-3 rounded-lg bg-white shadow-sm"
                >
                  {type === "population" && (
                    <>
                      <p>
                        <strong>Individual ID:</strong> {record.individual_id}
                      </p>
                      <p>
                        <strong>District:</strong> {record.district}
                      </p>
                      <p>
                        <strong>Age:</strong> {record.age}
                      </p>
                      <p>
                        <strong>Gender:</strong> {record.gender}
                      </p>
                      <p>
                        <strong>Occupation:</strong> {record.occupation}
                      </p>
                      <p>
                        <strong>Household Size:</strong> {record.household_size}
                      </p>
                      <p>
                        <strong>Income (VND/month):</strong>{" "}
                        {record.income_vnd_per_month.toLocaleString()}
                      </p>
                    </>
                  )}
                  {type === "weather" && (
                    <>
                      <p>
                        <strong>Station ID:</strong> {record.station_id}
                      </p>
                      <p>
                        <strong>Location:</strong> {record.location}
                      </p>
                      <p>
                        <strong>Coordinates:</strong> Lat{" "}
                        {record.coordinates.latitude}, Long{" "}
                        {record.coordinates.longitude}
                      </p>
                      <h4 className="font-medium mt-2">Measurements:</h4>
                      {record.measurements.map((measurement, idx) => (
                        <div key={idx} className="ml-4">
                          <p>
                            <strong>Date:</strong> {measurement.date}
                          </p>
                          <p>
                            <strong>Temperature (°C):</strong>{" "}
                            {measurement.temperature_celsius}
                          </p>
                          <p>
                            <strong>Humidity (%):</strong>{" "}
                            {measurement.humidity_percent}
                          </p>
                          <p>
                            <strong>Rainfall (mm):</strong>{" "}
                            {measurement.rainfall_mm}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                  {type === "agriculture" && (
                    <>
                      <p>
                        <strong>Farmer ID:</strong> {record.farmer_id}
                      </p>
                      <p>
                        <strong>Name:</strong> {record.name}
                      </p>
                      <p>
                        <strong>Location:</strong> {record.location}
                      </p>
                      <p>
                        <strong>Farm Size (hectares):</strong>{" "}
                        {record.farm_size_hectares}
                      </p>
                      <h4 className="font-medium mt-2">Crops:</h4>
                      {record.crops.map((crop, idx) => (
                        <div key={idx} className="ml-4">
                          <p>
                            <strong>Crop Type:</strong> {crop.crop_type}
                          </p>
                          <p>
                            <strong>Variety:</strong> {crop.variety}
                          </p>
                          <p>
                            <strong>Season:</strong> {crop.season}
                          </p>
                          <p>
                            <strong>Yield (tons/hectare):</strong>{" "}
                            {crop.yield_tons_per_hectare}
                          </p>
                          <p>
                            <strong>Irrigation Method:</strong>{" "}
                            {crop.irrigation_method}
                          </p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No data records available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DatasetDetail;
