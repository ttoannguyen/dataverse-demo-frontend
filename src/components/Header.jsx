// components/Header.jsx
// (Unchanged, as provided)
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./dataverse/SearchBar";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  const toggleSearch = () => setShowSearch((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const keyword = new URLSearchParams(location.search).get("keyword") || "";

  return (
    <header className="bg-primary relative z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl sm:text-2xl text-header tracking-tight">
                STAR-FARM
              </h1>
            </Link>

            <div className="relative" ref={searchRef}>
              <button
                onClick={toggleSearch}
                className={`flex items-center h-10 px-3 transition
                  ${
                    showSearch
                      ? "bg-[#aaa] text-header-hover"
                      : "bg-gray-100 text-header hover:bg-[#aaa] hover:text-header-hover"
                  }`}
              >
                <span>Search</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showSearch && (
                <SearchBar
                  keyword={keyword}
                  className={
                    "absolute right-0 mt-2 w-64 bg-white border shadow rounded z-50"
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;