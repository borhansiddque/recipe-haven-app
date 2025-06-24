import React from "react";
import { Link } from "react-router";
import { PiChefHatLight } from "react-icons/pi";
import { MdMailOutline, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-base-300 text-base-content pt-12 pb-8 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <PiChefHatLight className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Recipe Haven</span>
            </Link>
            <p className="mt-4 text-base-content/70">
              Discover, create, and share your favorite recipes with our
              community of food enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-recipes"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/add-recipe"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link
                  to="/my-recipes"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  My Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MdMailOutline className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:contact@recipebook.com"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  contact@recipehaven.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdOutlinePhone className="h-5 w-5 text-orange-500" />
                <a
                  href="tel:+1234567890"
                  className="text-base-content/70 hover:text-orange-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.facebook.com/borhan.siddque.19/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-blue-500 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/borhan-siddque-117b121a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-pink-500 transition-colors"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-base-content/20 text-center text-base-content/70">
          <p>© {currentYear} Recipe Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
