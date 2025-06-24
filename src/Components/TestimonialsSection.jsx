import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Cook",
    image: "https://i.ibb.co/Tx5GZMZJ/l10.jpg",
    stars: 5,
    quote:
      "Recipe Haven has transformed my cooking experience. The diverse recipes and clear instructions make it easy to create delicious meals every day.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    image: "https://i.ibb.co/Z60wmDrG/l1.jpg",
    stars: 5,
    quote:
      "As a food blogger, I'm always looking for inspiration. This platform provides an endless source of creative recipes that my audience loves.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Culinary Student",
    image: "https://i.ibb.co/hJBPVFQN/guy-stylish-hat-beige-jacket-smiles-shows-his-finger-camera-197531-23258.jpg",
    stars: 4,
    quote:
      "The recipe sharing community has helped me improve my skills as a culinary student. I've learned techniques I never would have discovered otherwise.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Family Chef",
    image: "https://i.ibb.co/x92VRGv/young-bearded-man-with-striped-shirt-273609-5677-1.jpg",
    stars: 5,
    quote:
      "Finding meals that my entire family enjoys has always been challenging, but Recipe Haven has made it so much easier with its diverse collection.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="md:py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">
              What Our Users Say
            </h2>
            <p className="mt-2 text-lg text-base-content/70">
              Join thousands of happy foodies who use Recipe Haven every day
            </p>
          </div>

          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={20}
            className="mySwiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-base-200 shadow-md p-6 h-full flex flex-col justify-between text-center hover:shadow-lg transition-all duration-300">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover rounded-full mx-auto mb-4 border-4 border-orange-200"
                  />
                  <h3 className="text-lg font-semibold text-base-content mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.stars)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                  <p className="text-base-content/80 flex-grow leading-relaxed">
                    <FaQuoteLeft className="inline-block mr-2 text-orange-400 text-sm" />
                    {testimonial.quote}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </div>
    </div>
  );
};

export default TestimonialsSection;
