import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-6 rounded-full">
            <SearchX className="w-16 h-16 text-red-600" />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 leading-7">
          Sorry, the page you're looking for doesn't exist, may have been
          removed, or the URL is incorrect.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
