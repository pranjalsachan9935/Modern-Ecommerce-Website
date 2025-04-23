import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { ShoppingBag } from "lucide-react";

import Categories from "../sections/Categories";
import sneaker from "../../assets/sneakers.webp";
import smartwatch from "../../assets/smartwatch.webp";
import earbuds from "../../assets/earbuds.webp";
import chair from "../../assets/chair.webp";
import phone from "../../assets/phone.webp";
import tv from "../../assets/tv.webp";

import { useCart } from "@/context/CartContext";

const initialProducts = [
  {
    id: 1,
    name: "Trendy Sneakers",
    price: 100,
    discount: Math.floor(Math.random() * 51),
    image: sneaker,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120,
    discount: Math.floor(Math.random() * 31),
    image: smartwatch,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 99,
    discount: Math.floor(Math.random() * 31),
    image: earbuds,
  },
  {
    id: 4,
    name: "Television",
    price: 180,
    discount: Math.floor(Math.random() * 31),
    image: tv,
  },
  {
    id: 5,
    name: "Comfy Chair",
    price: 125,
    discount: Math.floor(Math.random() * 31),
    image: chair,
  },
  {
    id: 6,
    name: "Smart Phone",
    price: 90,
    discount: Math.floor(Math.random() * 31),
    image: phone,
  },
];

export default function FeaturedProducts() {
  const {addToCart} = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".product-card");
  
    gsap.set(cards, { opacity: 0, y: 0 });
  
    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "sine.out",
          overwrite: "auto",
        });
      },
      start: "top 85%",
    });
  }, []);
  

  const [sortBy, setSortBy] = useState("name");

  const sortProducts = (products) => {
    if (sortBy === "name") {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    return products;
  };

  const sortedProducts = sortProducts(initialProducts);

  return (
    <section className="py-5 px-4 bg-white">
      <Categories />
      <div className="flex justify-end mb-6 mx-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="relative after:content-['▾'] after:text-xl flex"
            >
              Sort Products
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
            <DropdownMenuItem onClick={() => setSortBy("name")}>
              Sort by Name
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortBy("price")}>
              Sort by Price
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {sortedProducts.map((product) => (
          <Card
            key={product.id}
            className="product-card p-0 transition-transform duration-300 ease-in-out transform hover:scale-[1.01]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover overflow-hidden rounded-t-lg"
            />
            <CardContent className="p-4">
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-gray-800 font-semibold">
                ${product.price}
                <span className="text-red-500 text-sm font-normal pl-2">
                  ({product.discount}% OFF)
                </span>
              </p>

              <div className="flex flex-col justify-center gap-3 my-2">
                <Button onClick={()=> addToCart(product)} className="flex items-center gap-2 justify-center w-full sm:w-auto active:scale-95">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </Button>
                <Button
                  className="flex items-center gap-2 justify-center w-full sm:w-auto active:scale-95"
                  variant="outline"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
