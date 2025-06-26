import React from "react";
import Banner from "../Components/Banner";
import FeaturesSection from "../Components/FeaturesSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import TopRecipes from "../Components/TopRecipes";
import RecipeChallenge from "../Components/RecipeChallenge";

const Home = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <Banner />
      <TopRecipes />
      <FeaturesSection />
      <TestimonialsSection />
      <RecipeChallenge/>
    </div>
  );
};

export default Home;
