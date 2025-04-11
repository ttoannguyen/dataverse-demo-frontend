import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Nav = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
      setTimeoutId(null);
    }, 500);
    setTimeoutId(id);
  };
  return (
    <div className="">
      <nav className="bg-nav">
        <div className="max-w-7xl mx-auto flex items-center h-14 space-x-8 px-4">
          <Link
            to="/"
            className="text-amber-50 p-2 hover:bg-gray-200 hover:text-gray-500 font-medium text-lg transition-colors duration-200"
          >
            {t("home")}
          </Link>
          
          {/* Datasets with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/dataverse"
              className="text-amber-50 p-2  hover:bg-gray-200 hover:text-gray-500 font-medium text-lg transition-colors duration-200 flex items-center"
            >
              {t("datasets")}
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>

            <div
              className={`absolute top-full left-0 w-48 bg-[#eee] py-2 z-10 transition-opacity duration-300 ease-in-out ${
                isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/dataverse/public"
                className="block px-4 py-2 text-black hover:bg-[#ddd] hover:text-blue-400 text-sm transition-colors"
              >
                {t("public_datasets")}
              </Link>
              <Link
                to="/dataverse/private"
                className="block px-4 py-2 text-black hover:bg-[#ddd] hover:text-blue-400 text-sm transition-colors"
              >
                {t("private_datasets")}
              </Link>
              <Link
                to="/dataverse/upload"
                className="block px-4 py-2 text-black hover:bg-[#ddd] hover:text-blue-400 text-sm transition-colors"
              >
                {t("upload_dataset")}
              </Link>
            </div>
          </div>
        </div>
        <Link
            to="/dashboard"
            className="text-amber-50 p-2 hover:bg-gray-200 hover:text-gray-500 font-medium text-lg transition-colors duration-200"
          >
            {t("dashboard")}
          </Link>
      </nav>
    </div>
  );
};

export default Nav;
