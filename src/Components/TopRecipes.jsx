// src/Components/TopRecipes.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const TopRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch("https://recipe-haven-server-five.vercel.app/top-recipes")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data));
  }, []);

  return (
    <Fade direction="up" cascade triggerOnce>
      <div className="my-10 sm:my-20 max-w-7xl mx-auto px-4 bg-base-100">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-orange-500">Top Recipes</h2>
          <p className="mt-2 text-lg text-base-content/70">
            Where food lovers find their next favorite dish
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRecipes.map((recipe) => (
            <div key={recipe._id} className="bg-base-200 shadow-md rounded-lg p-5 flex flex-col justify-between">
              <div className="">
                <p className="text-sm font-medium bg-orange-500 text-white py-1 px-2 inline-block rounded-full mb-5">
                Likes: {recipe.likes}
              </p>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold my-3 text-base-content">
                {recipe.title}
              </h3>
              <div className="space-y-2 mb-5 text-base-content/70">
                <p>Cuisine: {recipe.cuisine}</p>
                <p>Preparation Time: {recipe.prepTime} Minutes</p>
                <div className="flex flex-wrap gap-1">
                  {recipe.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
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
        <div className="flex justify-center items-center mt-10">
          <Link to="/all-recipes">
            <button className="bg-orange-500 text-white px-6 py-4 rounded-full hover:bg-orange-600 transition cursor-pointer font-medium">
              Explore All Recipes
            </button>
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default TopRecipes;
