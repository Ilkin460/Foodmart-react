import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon } from "react-icons/fa";
import logo from '../../assets/img/gallery/logo.png'; 

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-360 mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        
        <div className="lg:col-span-1">
          <div className="mb-6">
            <img src={logo} alt="Foodmart Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="flex gap-4 text-gray-500">
            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <FaYoutube className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <FaAmazon className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
          </div>
        </div>

        {[
          { title: "Ultras", links: ["About us", "Conditions", "Our Journals", "Careers", "Affiliate Programme", "Ultras Press"] },
          { title: "Customer Service", links: ["FAQ", "Contact", "Privacy Policy", "Returns & Refunds", "Cookie Guidelines", "Delivery Information"] },
          { title: "Customer Service", links: ["FAQ", "Contact", "Privacy Policy", "Returns & Refunds", "Cookie Guidelines", "Delivery Information"] },
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-gray-900 mb-6">{section.title}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {section.links.map((link) => (
                <li key={link}><a href="#" className="hover:text-amber-500 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Subscribe Us</h4>
          <p className="text-sm text-gray-500 mb-6">Subscribe to our newsletter to get updates about our grand offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-2 py-2 bg-white border border-gray-200 rounded-l-lg focus:outline-none focus:border-amber-500"
            />
            <button className="bg-gray-900 text-white px-2 py-2 rounded-r-lg font-bold hover:bg-amber-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;