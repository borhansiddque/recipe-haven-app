import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const recipes = useLoaderData();
  const initialMyRecipes = recipes.filter(
    (recipe) => recipe.user === user?.email
  );
  const [myRecipes, setMyRecipe] = useState(initialMyRecipes);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete recipe!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-haven-server-five.vercel.app/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your recipe has been deleted.",
          icon: "success",
        });
        // remove recipe from ui
        const remainingRecipe = myRecipes.filter(
          (recipes) => recipes._id !== id
        );
        setMyRecipe(remainingRecipe);
      }
    });
  };

  const handleEditClick = (recipe) => {
    setEditingRecipe(recipe);
  };

  useEffect(() => {
    if (editingRecipe) {
      document.getElementById("editModal").showModal();
    }
  }, [editingRecipe]);

  const handleUpdateRecipe = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRecipe = {
      ...editingRecipe,
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisine: form.cuisine.value,
      prepTime: form.prepTime.value,
    };

    fetch(
      `https://recipe-haven-server-five.vercel.app/recipes/${editingRecipe._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const updatedList = myRecipes.map((item) =>
          item._id === updatedRecipe._id ? updatedRecipe : item
        );
        setMyRecipe(updatedList);
        setEditingRecipe(null);
        document.getElementById("editModal").close();
        Swal.fire("Updated!", "Recipe updated successfully.", "success");
      });
  };

  if (myRecipes.length === 0) {
    return (
      <div className="bg-base-100 min-h-screen py-20">
        <div className="max-w-3xl mx-auto bg-base-200 shadow-md rounded-lg p-8">
          <h3 className="text-orange-500 text-3xl font-bold text-center">
            No Recipes Found
          </h3>
          <p className="text-center mt-4 text-base-content/70">
            You haven't created any recipes yet. Start adding your favorite
            recipes!
          </p>
          <div className="flex justify-center mt-6">
            <Link to={"/add-recipe"}>
              <button className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer shadow-md hover:shadow-lg">
                Add Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-orange-500 text-3xl sm:text-4xl font-bold text-center mb-10">
          You Added - {myRecipes.length} Recipes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {myRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-base-200 shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-6 space-y-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm font-medium bg-orange-500 text-white py-1 px-3 inline-block rounded-full">
                      Likes: {recipe.likes}
                    </p>
                  </div>
                  <h3 className="text-2xl md:text-3xl text-base-content font-bold">
                    {recipe.title}
                  </h3>
                </div>
                <div>
                  <h4 className="font-medium text-orange-500 mb-2">
                    Ingredients:
                  </h4>
                  <p className="ml-4 text-base-content/70 leading-relaxed">
                    {recipe.ingredients}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-orange-500 mb-2">
                    Instructions:
                  </h4>
                  <p className="ml-4 text-base-content/70 leading-relaxed">
                    {recipe.instructions}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <h4 className="font-medium text-orange-500">
                      Preparation Time:
                    </h4>
                    <p className="text-base-content/70">{recipe.prepTime} Minutes</p>
                  </div>
                  <div className="flex gap-2">
                    <h4 className="font-medium text-orange-500">Cuisine:</h4>
                    <p className="text-base-content/70">{recipe.cuisine}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recipe.categories.map((category, index) => (
                      <span
                        key={index}
                        className="inline-block bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer"
                  onClick={() => handleEditClick(recipe)}
                >
                  Edit Recipe
                </button>
                <button
                  onClick={() => handleDelete(recipe._id)}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors font-medium cursor-pointer"
                >
                  Delete Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <dialog id="editModal" className="modal">
          <div className="modal-box max-w-2xl bg-base-200">
            <h3 className="font-bold text-2xl mb-6 text-orange-500">
              Edit Recipe
            </h3>
            {editingRecipe && (
              <form onSubmit={handleUpdateRecipe} className="space-y-4">
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingRecipe.title}
                    placeholder="Recipe Title"
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={editingRecipe.image}
                    placeholder="Recipe Image URL"
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Ingredients
                  </label>
                  <textarea
                    name="ingredients"
                    defaultValue={editingRecipe.ingredients}
                    placeholder="List ingredients here..."
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="4"
                  />
                </div>
                
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Instructions
                  </label>
                  <textarea
                    name="instructions"
                    defaultValue={editingRecipe.instructions}
                    placeholder="Cooking instructions..."
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="4"
                  />
                </div>
                
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Cuisine
                  </label>
                  <input
                    type="text"
                    name="cuisine"
                    defaultValue={editingRecipe.cuisine}
                    placeholder="Cuisine type"
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <div>
                  <label className="text-base-content font-medium mb-2 block">
                    Preparation Time (minutes)
                  </label>
                  <input
                    type="number"
                    name="prepTime"
                    defaultValue={editingRecipe.prepTime}
                    placeholder="30"
                    className="w-full bg-base-100 text-base-content border border-base-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="modal-action pt-6">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium cursor-pointer"
                  >
                    Update Recipe
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("editModal").close();
                      setEditingRecipe(null);
                    }}
                    className="bg-base-300 text-base-content px-6 py-2 rounded-md hover:bg-base-content/10 transition-colors font-medium cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyRecipes;
