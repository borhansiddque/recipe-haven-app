import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const DetailsRecipe = () => {
  const { user } = useContext(AuthContext);
  const loadedRecipe = useLoaderData();
  const [recipe, setRecipe] = useState(loadedRecipe);

  const handleLike = (id) => {
    fetch(`https://recipe-haven-server-five.vercel.app/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: recipe.likes }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Like Added");
          // update page without page reload
          setRecipe((prev) => ({
            ...prev,
            likes: prev.likes + 1,
          }));
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-20 bg-white shadow-md rounded-lg p-5">
      <p className="mb-3 py-1 px-2 bg-orange-600 inline-block rounded text-white capitalize">
        {recipe.likes} people interested in this recipe
      </p>
      <img
        src={recipe.image}
        alt=""
        className="w-full h-[400px] object-cover"
      />
      <div className="mt-8 space-y-8">
        <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
          <h3 className="text-3xl text-orange-500">{recipe.title}</h3>
          <div className="flex items-center gap-2">
            {user.email === recipe.user ? (
              <AiOutlineLike
                size={28}
                className="text-gray-400 cursor-not-allowed"
              ></AiOutlineLike>
            ) : (
              <AiOutlineLike
                onClick={() => handleLike(recipe._id)}
                size={28}
                className="cursor-pointer text-gray-700"
              ></AiOutlineLike>
            )}

            <p className="text-sm font-medium bg-orange-500 text-white py-1 px-2 inline-block rounded-full ">
              Likes: {recipe.likes}
            </p>
          </div>
        </div>
        <div className="">
          <h4 className="font-medium underline text-orange-500">
            Ingredients:
          </h4>
          <p className="ml-4 text-gray-500">{recipe.ingredients}</p>
        </div>
        <div className="">
          <h4 className="font-medium underline text-orange-500">
            Instructions:
          </h4>
          <p className="ml-4 text-gray-500">{recipe.instructions}</p>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <h4 className="font-medium underline text-orange-500">
              Preparation Time:
            </h4>
            <p className="text-gray-500">{recipe.prepTime} Minutes</p>
          </div>
          <div className="flex gap-2">
            <h4 className="font-medium underline text-orange-500">Cuisine:</h4>
            <p className="text-gray-500">{recipe.cuisine}</p>
          </div>
          <div className="flex gap-2">
            <h4 className="font-medium underline text-orange-500">
              Categories:
            </h4>
            <div className="flex gap-2">
              {recipe.categories.map((category, index) => (
                <p
                  key={index}
                  className="inline-block bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full mr-2"
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRecipe;
