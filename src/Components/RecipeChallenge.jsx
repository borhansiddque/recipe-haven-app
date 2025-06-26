import React from 'react';
import { Link } from 'react-router';

const RecipeChallenge = () => {
  return (
    <div className="px-4 md:px-10 mb-10 sm:mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#f97200] mb-2">🍽️ Monthly Recipe Challenge</h2>
        <p className="mb-6">Show off your cooking skills and stand a chance to get featured!</p>

        {/* Challenge Info */}
        <div className="rounded-lg shadow-md p-6 border border-orange-200">
          <h3 className="text-xl font-semibold mb-2">🥔 June Theme: "Potato Perfection"</h3>
          <p className="mb-4">
            Create your most creative, delicious potato-based dish — be it mashed, fried, baked or reinvented!
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center text-left sm:text-center gap-4 mb-4">
            <div>
              <p className="text-sm">📅 Submission Deadline</p>
              <p className="font-medium">June 30, 2025</p>
            </div>
            <div>
              <p className="text-sm">🏆 Winner Gets</p>
              <p className="font-medium">Featured on Homepage + Social Shoutout</p>
            </div>
          </div>

          {/* Rules */}
          <ul className="list-disc list-inside text-left mb-6">
            <li>Original recipe only</li>
            <li>Use potatoes as the main ingredient</li>
            <li>Include at least one photo of your dish</li>
            <li>Submission closes at midnight, June 30</li>
          </ul>

          {/* Submit Button */}
          <Link to={'/add-recipe'} className="bg-[#f97200] hover:bg-orange-600 text-white px-6 py-2 rounded transition">
            Submit Your Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeChallenge;
