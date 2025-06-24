import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderItems = [
  {
    id: 1,
    title: "Discover Delicious Recipes",
    subtitle: "Explore a world of culinary delights",
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Share Your Favorite Dishes",
    subtitle: "Let your recipes inspire others",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Connect With Food Lovers",
    subtitle: "Join our community of passionate foodies",
    image:
      "https://images.pexels.com/photos/1813504/pexels-photo-1813504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Banner = () => {
  return (
    <div className="bg-base-100">
      <div className="h-[70vh]">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full"
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center flex-col text-white space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold text-center px-4">{item.title}</h3>
                <p className="sm:text-lg text-center w-full sm:w-4/5 px-4 text-white/90">{item.subtitle}</p>
                <Link
                  to="/add-recipe"
                  className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 cursor-pointer font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Add Your Recipe
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center gap-2 py-4 text-2xl font-medium text-white shadow-md">
        <p>Discover</p>
        <Typewriter
          words={[
            "Delicious Recipes",
            "Culinary Experiences",
            "Food Adventures",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default Banner;
