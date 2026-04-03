import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-white opacity-80 max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful
              tools.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-all">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-all">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition-all">
                <FaXTwitter size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#FAFAFA] opacity-80">
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className="flex justify-between gap-8">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
