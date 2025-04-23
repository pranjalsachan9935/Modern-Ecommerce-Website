import { Package, CreditCard, BadgePercent, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Page Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the services that make your shopping experience smooth, secure, and satisfying.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Package className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Hassle-Free Returns</h3>
              <p className="text-sm text-gray-600">
                7-day easy returns on all items. No questions asked.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CreditCard className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Multiple Payment Options</h3>
              <p className="text-sm text-gray-600">
                Pay via UPI, cards, wallets, or cash on delivery — your call.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BadgePercent className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">Exclusive Deals</h3>
              <p className="text-sm text-gray-600">
                Enjoy member-only discounts and seasonal offers.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-none border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Headphones className="w-8 h-8 mb-3 text-black" />
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-sm text-gray-600">
                Friendly customer support always ready to help you out.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
