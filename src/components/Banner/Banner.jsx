import React from "react";
import BannerImg from "../../../assets/products/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 lg:px-5 mt-10 md:mt-16">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl md:max-w-md lg:max-w-full transition-transform hover:scale-105 duration-500" />
          <div>
            <div className="badge mb-5 p-2 badge-primary bg-[#E1E7FF] text-[#a754e6]">New: AI-Powered Tools Available</div>
            <h1 className="text-5xl font-bold logo-gradient">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 font-medium opacity-100">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start
              creating faster today. Explore Products
            </p>
            <div className="flex gap-3">
              <button className="btn btn-primary rounded-full">Explore Products</button>
              <button className="btn btn-outline rounded-full">Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
