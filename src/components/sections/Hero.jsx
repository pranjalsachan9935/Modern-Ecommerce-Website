import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-26 bg-gray-100 px-4">
      <h2 className="text-5xl font-bold mb-4">Discover the Latest Trends</h2>
      <p className="text-lg mb-6 text-gray-600">
        Shop the hottest collections and enjoy exclusive offers.
      </p>
      <Button>Shop Now</Button>
    </section>
  );
}
