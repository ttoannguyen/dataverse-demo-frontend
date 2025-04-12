import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Datasets",
    to: "/datasets",
    dropdown: [
      { label: "Data Search", to: "/datasets" },
      { label: "test", to: "/datasets/test" },
      { label: "upload", to: "/datasets/upload" },
    ],
  },
  {
    label: "KMS",
    to: "/kms",
  },
];

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

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
    <nav className="bg-primary">
      <div className="flex text-header items-center h-14 px-4">
        {navItems.map((item, index) => {
          const hasDropdown = item.dropdown && item.dropdown.length > 0;

          if (!hasDropdown) {
            return (
              <Link
                key={index}
                to={item.to}
                className=" p-2 px-5 hover:text-header-hover   font-medium text-lg transition-colors duration-200"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.to}
                className="p-2 px-5   font-medium text-lg transition-colors duration-200 flex items-center"
              >
                {item.label}
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
                  isDropdownOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.to}
                    className="block px-4 py-2 text-black hover:bg-[#ddd] hover:text-blue-400 text-sm transition-colors"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
