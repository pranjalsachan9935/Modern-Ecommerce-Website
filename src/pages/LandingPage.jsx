
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Subscribe from "../components/sections/Subscribe";
import Testimonial from "../components/sections/Testimonial";
import Slider from "../components/sections/OfferSlider";


export default function LandingPage() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts />
      <Subscribe />
      <Testimonial />
    </div>
  );
}
