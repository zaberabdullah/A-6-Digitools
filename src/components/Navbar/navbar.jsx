import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center my-4">
      <div >
        <h2 className="text-3xl font-bold">DigiTools</h2>
      </div>

      <div className=" flex items-center gap-5 font-semibold text-[#101727]">
        <a href="">Products</a>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Testimonials</a>
        <a href="">FAQ</a>
      </div>

      <div className="flex items-center gap-5">
        <div className="cursor-pointer relative">
            <LuShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[12px] font-bold px-1.5 rounded-full border border-white leading-none">0</span>
        </div>
        <button className="cursor-pointer">Login</button>
        <button className="btn btn-primary rounded-full cursor-pointer">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
