import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllRecipes = () => {
  const recipes = useLoaderData();
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  // Get unique cuisines from the recipes
  const cuisines = ["All", ...new Set(recipes.map((recipe) => recipe.cuisine))];
  // Filter recipes based on selected cuisine
  const filteredRecipes =
    selectedCuisine === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.cuisine === selectedCuisine);
  return (
    <div className="my-20 max-w-7xl mx-auto px-3 sm:px-0 bg-base-100 min-h-screen">
      <div className="flex items-center justify-between">
        <h3 className="text-orange-500 text-xl sm:text-3xl font-bold text-center">
          All Recipes Here
        </h3>

        {/* Cuisine Filter Dropdown */}
        <div className="flex justify-end text-orange-500">
          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="bg-base-200 text-base-content border border-orange-400 rounded-md px-2 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {filteredRecipes.map((recipe) => (
          <div key={recipe._id} className="bg-base-200 shadow-md rounded-lg p-5">
            <p className="text-sm font-medium bg-orange-500 text-white py-1 px-2 inline-block rounded-full mb-5">
              Likes: {recipe.likes}
            </p>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold my-3 text-base-content">
              {recipe.title}
            </h3>
            <div className="space-y-2 mb-5 text-base-content/70">
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Preparation Time: {recipe.prepTime} Minutes</p>
              <div className="">
                {recipe.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <Link to={`/recipe-details/${recipe._id}`}>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
