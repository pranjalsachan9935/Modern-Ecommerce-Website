import { Heart, Truck, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At <span className="font-semibold">CityMart</span>, we’re on a mission to make modern shopping simple, stylish, and accessible. Whether it's fashion, electronics, or everyday essentials — we bring the best to your doorstep.
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Truck className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Swift and reliable delivery across the country, because waiting isn’t fun.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Secure Shopping</h3>
              <p className="text-sm text-gray-600">
                Shop confidently with end-to-end encryption and buyer protection.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Heart className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Customer First</h3>
              <p className="text-sm text-gray-600">
                We care deeply about your experience and satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Closing Statement */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold">Join the Movement</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Thousands of happy customers have trusted us — now it's your turn. Discover your next favorite thing at CityMart.
          </p>
        </div>
      </div>
    </section>
  );
}
