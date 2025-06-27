import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const recipes = useLoaderData();
  const myRecipes = recipes.filter((recipe) => recipe.user === user?.email);
  console.log(recipes);
  

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
      <div className="p-5 bg-amber-600 text-center rounded-xl">
        <h3 className="text-2xl">Total Recipes</h3>
        <p className="text-2xl font-semibold mt-2">{recipes.length}</p>
      </div>
      <div className="p-5 bg-amber-600 text-center rounded-xl">
        <h3 className="text-2xl">My Recipes</h3>
        <p className="text-2xl font-semibold mt-2">{myRecipes.length}</p>
      </div>
      <div className="p-5 bg-amber-600 text-center rounded-xl">
        <h3 className="text-2xl">{user.displayName}</h3>
        <p className="mt-2 text-sm font-semibold">{user?.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
