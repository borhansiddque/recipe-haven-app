import React from "react";
import { LuUtensilsCrossed, LuUsers } from "react-icons/lu";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <LuUtensilsCrossed className="h-10 w-10 text-orange-500" />,
      title: "Diverse Recipes",
      description:
        "Explore a wide variety of cuisines from around the world. From Italian to Indian, Mexican to Chinese, we have it all.",
    },
    {
      id: 2,
      icon: <FaRegClock className="h-10 w-10 text-orange-500" />,
      title: "Quick & Easy",
      description:
        "Find recipes that fit your schedule, with clear preparation times and easy-to-follow instructions.",
    },
    {
      id: 3,
      icon: <FaRegHeart className="h-10 w-10 text-orange-500" />,
      title: "Save Favorites",
      description:
        "Like recipes to build your collection of favorites and show appreciation to other creators.",
    },
    {
      id: 4,
      icon: <LuUsers className="h-10 w-10 text-orange-500" />,
      title: "Community",
      description:
        "Join a community of food enthusiasts sharing their culinary creations and discoveries.",
    },
  ];
  
  return (
    <div className="mb-10 sm:mb-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500">
            Why Choose Recipe Haven?
          </h2>
          <p className="mt-2 text-lg text-base-content/70">
            Discover the perfect platform for all your recipe needs
          </p>
        </div>

        <Fade direction="up" cascade triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-base-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-base-content mb-3">
                  {feature.title}
                </h3>
                <p className="text-base-content/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FeaturesSection;
