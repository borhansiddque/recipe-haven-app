import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { PiChefHatLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("You LogOut Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium ${isActive && "text-orange-500"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-recipes"
          className={({ isActive }) =>
            `font-medium ${isActive && "text-orange-500"}`
          }
        >
          All Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium ${isActive && "text-orange-500"}`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `font-medium ${isActive && "text-orange-500"}`
          }
        >
          Support
        </NavLink>
      </li>
      {user && (
        <>
          {/* <li>
            <NavLink
              to="/add-recipe"
              className={({ isActive }) =>
                `font-medium ${isActive && "text-orange-500"}`
              }
            >
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-recipes"
              className={({ isActive }) =>
                `font-medium ${isActive && "text-orange-500"}`
              }
            >
              My Recipes
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-medium ${isActive && "text-orange-500"}`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="bg-base-300 py-5 sticky top-0 z-50 shadow-lg px-4 xl:px-0">
      <div className="mb-2 flex items-center justify-center md:hidden">
        <Link to="/" className="flex items-center gap-2">
          <PiChefHatLight className="h-8 w-8 text-orange-500" />
          <h2 className="text-xl text-base-content">Recipe Haven.</h2>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile menu */}
        <div className="dropdown inline-block md:hidden">
          <div tabIndex={0} role="button" className="btn btn-circle">
            <MdMenu size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Mobile menu */}

        <div className="hidden md:inline-block">
          <Link to="/" className="flex items-center gap-2">
            <PiChefHatLight className="h-8 w-8 text-orange-500" />
            <h2 className="text-xl text-base-content">Recipe Haven.</h2>
          </Link>
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex gap-4 text-base-content">{links}</ul>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full bg-white">
                  <img
                    data-tooltip-id="user-profile-tooltip"
                    data-tooltip-content={user?.displayName}
                    alt="User Profile"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co.com/NgcVbsJ4/icons8-user-100.png"
                    }
                  />
                  <Tooltip id="user-profile-tooltip" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="text-center py-2">{user?.displayName}</li>
                <li className="flex items-center justify-center">
                  <button
                    onClick={handleLogOut}
                    className="mt-2 bg-orange-500 rounded text-white w-fit px-4 py-2 font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-base-content hover:bg-base-200 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
