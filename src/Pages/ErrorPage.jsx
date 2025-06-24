import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiChefHatLight } from "react-icons/pi";

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md p-10 mx-auto w-full bg-white rounded-lg flex flex-col items-center justify-center space-y-5 shadow shadow-gray-400">
        <PiChefHatLight size={60} className="text-orange-500 -mb-3" />
        <h2 className="text-7xl font-bold text-orange-500">404</h2>
        <p className="text-orange-500 text-xl">FOUND ERROR</p>
        <Link
          to="/"
          className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors items-center justify-center gap-2 inline-flex font-medium"
        >
          <FaArrowLeftLong />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
