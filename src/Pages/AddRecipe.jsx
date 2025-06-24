import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);

  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    prepTime: "",
    categories: [],
    likes: 0,
  });

  const cuisineOptions = [
    "Italian",
    "Mexican",
    "Indian",
    "Chinese",
    "Bangladeshi",
    "Others",
  ];
  const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    let updatedCategories = [...recipe.categories];
    if (checked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter((cat) => cat !== value);
    }
    setRecipe({ ...recipe, categories: updatedCategories });
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();
    const NewRecipeWithUser = { ...recipe, user: user?.email };
    // Send Recipe Data to the server/DB
    fetch("https://recipe-haven-server-five.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewRecipeWithUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recipe added successfully!");
          setRecipe({
            image: "",
            title: "",
            ingredients: "",
            instructions: "",
            cuisine: "",
            prepTime: "",
            categories: [],
            likes: 0,
          });
        }
      });
  };

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4 py-10 bg-base-200 text-base-content shadow-md my-10 rounded-md">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Add a New Recipe
        </h1>

        <form onSubmit={handleAddRecipe} className="space-y-6">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Recipe Image URL
            </label>
            <input
              type="text"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Instructions
            </label>
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
            />
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Cuisine Type
            </label>
            <select
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">-- Select Cuisine --</option>
              {cuisineOptions.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Preparation Time (minutes)
            </label>
            <input
              type="number"
              name="prepTime"
              value={recipe.prepTime}
              onChange={handleChange}
              className="mt-1 block w-full bg-base-100 text-base-content border border-base-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              min="1"
              required
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Categories
            </label>
            <div className="mt-2 flex flex-wrap gap-4">
              {categoryOptions.map((cat) => (
                <label key={cat} className="flex items-center space-x-2 text-base-content">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={recipe.categories.includes(cat)}
                    onChange={handleCategoryChange}
                    className="accent-orange-500"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Like Count (readonly) */}
          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Like Count
            </label>
            <input
              type="number"
              value={recipe.likes}
              readOnly
              className="mt-1 block w-full bg-base-300 text-base-content/70 border border-base-300 p-2 rounded cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition cursor-pointer font-medium"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
