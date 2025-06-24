import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 bg-base-200 p-8 rounded-lg shadow-md">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">
          About Recipe Haven
        </h1>

        {/* Introduction */}
        <p className="text-lg text-base-content/80 mb-8 text-center leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-orange-500">Recipe Haven</span> –
          your home for discovering, sharing, and celebrating great recipes.
        </p>

        {/* Our Story */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-base-content flex items-center gap-2">
            👨‍🍳 Our Story
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            Recipe Haven was born out of a love for cooking and a desire to bring
            people together through food. What started as a small food blog is now
            a thriving community where food enthusiasts can share their creations,
            discover new dishes, and connect with like-minded cooks around the
            globe.
          </p>
        </section>

        {/* Features */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-base-content flex items-center gap-2">
            🌟 What We Offer
          </h2>
          <ul className="list-disc pl-6 text-base-content/70 space-y-3">
            <li>Thousands of curated and user-submitted recipes</li>
            <li>Filter by ingredients, cooking time, and difficulty</li>
            <li>User reviews, ratings, and favorites</li>
            <li>Easy-to-use recipe upload system</li>
            <li>Weekly featured dishes and cooking tips</li>
          </ul>
        </section>

        {/* Team */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-base-content flex items-center gap-2">
            👥 Meet the Team
          </h2>
          <p className="text-base-content/70 mb-4 leading-relaxed">
            Our small but passionate team includes developers, food bloggers, and
            kitchen adventurers!
          </p>
          <ul className="list-disc pl-6 text-base-content/70 space-y-2">
            <li>🧑‍💻 Borhan Siddique – Full Stack Developer</li>
            <li>👩‍🍳 Laila Aktar – Food Content Creator</li>
            <li>🎨 Tanvir Hossain – UI/UX Designer</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4 text-base-content flex items-center gap-2">
            📫 Get in Touch
          </h2>
          <p className="text-base-content/70 mb-4 leading-relaxed">
            Got a question, suggestion, or just want to say hi? We'd love to hear
            from you!
          </p>
          <p className="text-base-content/70">
            Email us at{" "}
            <a
              href="mailto:hello@recipehaven.com"
              className="text-orange-500 underline hover:text-orange-600 transition-colors"
            >
              hello@recipehaven.com
            </a>
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              Join Our Community
            </h3>
            <p className="text-base-content/70 mb-4">
              Start sharing your favorite recipes and discover amazing dishes from our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
              >
                Sign Up Today
              </a>
              <a
                href="/all-recipes"
                className="bg-base-300 text-base-content px-6 py-3 rounded-md hover:bg-base-content/10 transition-colors font-medium"
              >
                Explore Recipes
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
