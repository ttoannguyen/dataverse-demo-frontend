import { Link } from "react-router-dom";
const Header = () => {
  
  return (
    <header className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between py-10">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl sm:text-5xl text-text-header tracking-tight">
                STAR-FARM
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
            </div>
          </div>

          {/* Navigation */}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
