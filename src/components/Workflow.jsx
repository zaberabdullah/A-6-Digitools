import React from "react";

const Workflow = () => {
  return (
    <section className="container mx-auto px-4 lg:px-16 py-20">
      <div className="bg-linear-to-r from-[#4e50ee] to-[#cb31e2] rounded-4xl py-20 px-8 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Transform Your Workflow?</h2>

        <p className="text-purple-50 text-[14px] md:text-[16px] max-w-2xl mx-auto mb-12 ">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-white text-[#7C3AED] px-7 py-2 rounded-full font-bold text-[16px] hover:bg-gray-50">
            Explore Products
          </button>
          <button className="border border-gray-100  text-white px-7 py-2 rounded-full font-bold text-[16px]">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap justify-center text-sm font-medium gap-2">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
