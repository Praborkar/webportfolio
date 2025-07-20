
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-psyco-black-DEFAULT px-6">
      <div className="glassmorphism p-12 text-center max-w-md animate-fade-in">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={60} className="text-psyco-green-DEFAULT" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
