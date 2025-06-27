import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { PiChefHatLight } from "react-icons/pi";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  return (
    <>
      <Toaster position="top-right" />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full lg:hidden bg-base-200">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link to="/" className="flex items-center gap-2 lg:hidden">
              <PiChefHatLight className="h-8 w-8 text-orange-500" />
              <h2 className="text-xl text-base-content">Recipe Haven.</h2>
            </Link>
            <div className="mx-2 flex-1 px-2 lg:hidden text-center">
              Dashboard
            </div>
          </div>
          {/* Page content here */}
          <div className="px-5">
            <Outlet></Outlet>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side bg-base-200">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu  text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PiChefHatLight className="h-8 w-8 text-orange-500" />
              <h2 className="text-xl text-base-content">Recipe Haven.</h2>
            </Link>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"add-recipe"}>Add Recipe</NavLink>
            </li>
            <li>
              <NavLink to={"my-recipes"}>My Recipes</NavLink>
            </li>

            <Link to={"/"} className="btn mt-5 bg-orange-600">
              Back To Home
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
