import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CreditCard,
  Wallet,
  Banknote,
  IndianRupee,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-gray-200 text-gray-700 py-5 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* Branding & Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ShopHere</h2>
          <p className="text-sm text-gray-600">
            Discover premium products at unbeatable prices. Stay updated with our latest collections and offers.
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative">
            Office
            <span className="block w-12 h-1 bg-gray-500 mt-1 rounded-full" />
          </h3>
          <p className="text-sm text-gray-600">Crossing Road<br />Om Vihar, Ghaziabad<br />PIN 201009, India</p>
          <p className="mt-2 text-sm text-gray-600">support@citymart.com</p>
          <p className="text-sm text-gray-600">+91-9878500000</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative">
            Links
            <span className="block w-11 h-1 bg-gray-500 mt-1 rounded-full" />
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/about" className="hover:text-black">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            <li><Link to="/services" className="hover:text-black">Services</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative">
            Newsletter
            <span className="block w-22 h-1 bg-gray-500 mt-1 rounded-full" />
          </h3>
          <div className="flex items-center border-b border-gray-400 py-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full text-sm focus:outline-none"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="w-5 h-5 text-gray-600 hover:text-black" /></a>
            <a href="#"><Twitter className="w-5 h-5 text-gray-600 hover:text-black" /></a>
            <a href="#"><Instagram className="w-5 h-5 text-gray-600 hover:text-black" /></a>
            <a href="#"><Linkedin className="w-5 h-5 text-gray-600 hover:text-black" /></a>
          </div>
        </div>
      </div>


     
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 <span className="font-semibold text-gray-700">CityMart</span>. All rights reserved.
      </div>
    </footer>
  );
}
