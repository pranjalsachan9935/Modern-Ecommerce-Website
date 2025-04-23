"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import img1 from "../../assets/catgirlmutant-wg6LeWLUToI-unsplash.jpg";
import img2 from "../../assets/artem-beliaikin-StYIswdH23U-unsplash.jpg";
import img3 from "../../assets/artem-beliaikin-pJPGCvLblGk-unsplash.jpg";
import img4 from "../../assets/artem-beliaikin-kmQT01d3lyk-unsplash.jpg";

const images = [img1, img2, img3, img4];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] overflow-hidden flex items-center justify-center text-center">
 
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`sale ${index}`}
            className={`absolute w-full h-full object-cover transition-all duration-[3000ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
              index === currentIndex
                ? "opacity-100 scale-105 translate-x-0 z-10"
                : "opacity-0 scale-100 translate-x-12 z-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40 z-20 " />
      <div className="relative z-30 text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Seasonal Sale is Live!</h1>
        <p className="text-lg mb-6">Up to 50% off on selected products.</p>
        <Button >Shop Now</Button>
      </div>
    </section>
  );
}
