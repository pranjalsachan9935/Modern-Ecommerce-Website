import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Subscribe from "../components/sections/Subscribe";
import Testimonial from "../components/sections/Testimonial";
import Slider from "../components/sections/OfferSlider";

export default function LandingPage({ searchTerm }) {
  return (
    <div>
      <Slider />
      <FeaturedProducts searchTerm={searchTerm} />
      <Subscribe />
      <Testimonial />
    </div>
  );
}
