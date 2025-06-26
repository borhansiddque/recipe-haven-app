import React from "react";

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#f97200] mb-4">
        Support
      </h1>
      <p className="text-center mb-10">
        Have questions? We're here to help! Browse FAQs or reach out anytime.
      </p>

      {/* FAQ Section using DaisyUI Accordion */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 ">
          🙋 Frequently Asked Questions
        </h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              How can I submit a recipe?
            </div>
            <div className="collapse-content ">
              Go to the "Add Recipe" page, fill out the form, and click submit.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              Can I edit or delete my submitted recipe?
            </div>
            <div className="collapse-content ">
              Yes, go to your profile and manage your recipes anytime.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              Is RecipeHut free to use?
            </div>
            <div className="collapse-content ">
              Absolutely! RecipeHut is 100% free for users.
            </div>
          </div>
        </div>
      </div>

      {/* Support Hours */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🕐 Support Hours</h2>
        <p className="mb-2">Monday – Friday: 9:00 AM – 6:00 PM (BST)</p>
        <p className="">Saturday – Sunday: Limited support (Email only)</p>
      </div>

      {/* Contact Info */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 ">📞 Contact Us</h2>
        <p className="mb-1">
          Email:{" "}
          <a
            href="mailto:support@recipehut.com"
            className="text-[#f97200] underline"
          >
            support@recipehaven.com
          </a>
        </p>
        <p className="">Phone: +880 1234-567890</p>
      </div>
    </div>
    
  );
};

export default Support;
