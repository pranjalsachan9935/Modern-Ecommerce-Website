import { Button } from "@/components/ui/button";
import { User, Menu, X, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleProfile = () => setOpen(!open);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <>
      <header className="sticky top-0  z-99 flex justify-between items-center p-4 shadow-md bg-white">
        <Link to="/">
          <h1 className="text-2xl font-bold cursor-pointer">CityMart</h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-5">
            <Link
              to="/"
              className="text-black/90 font-semibold hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black/90 font-semibold hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-black/90 font-semibold hover:underline underline-offset-4"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="text-black/90 font-semibold hover:underline underline-offset-4"
            >
              Services
            </Link>
          </nav>

          {/* Search */}
          <div className="relative mx-4 flex items-center">
            <input
              type="text"
              placeholder="Search here..."
              className="border-1 border-gray-800 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-black transition w-50"
            />
            <Search className="absolute right-3 w-4 h-4 text-gray-500" />
          </div>

          {/* Cart */}
          <div className="relative rounded-full h-9 w-9 p-0 flex items-center justify-center">
            <Link to="/cart">
              <span className="absolute -top-0 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
              <ShoppingCart />
            </Link>
          </div>

          <Button
            onClick={handleProfile}
            className="relative rounded-full h-9 w-9 p-0 flex items-center justify-center"
          >
            <User />
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {/* Cart Icon on small screens */}
          <div className="relative rounded-full h-8 w-8 p-0 flex items-center justify-center">
            <Link to="/cart">
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
              <ShoppingCart />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={toggleMobileNav}>
            {mobileNavOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {mobileNavOpen && (
        <div className=" md:hidden bg-white shadow-md p-4 space-y-3">
          <nav className="flex flex-col gap-3">
            <Link to="/" className="text-black font-medium hover:underline">
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-black font-medium hover:underline"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-black font-medium hover:underline"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="text-black font-medium hover:underline"
            >
              Services
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-black w-full"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      )}
      {/* 
      {open && (
        <div className="absolute top-16 right-4 bg-white backdrop-blur-md shadow-lg rounded-lg p-4 w-48 z-50 border border-gray-200">
          <ul className="space-y-2">
            <li className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
              Cart
            </li>
            <li className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
              Settings
            </li>
            <li className="text-gray-700 hover:bg-gray-100 px-3 py-1 rounded cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )} */}
    </>
  );
}
