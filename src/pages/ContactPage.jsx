import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="bg-white text-black py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <Mail className="w-6 h-6 text-black" />
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-gray-600 text-sm">support@citymart.com</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <Phone className="w-6 h-6 text-black" />
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 98005 40000</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 hover:shadow-md transition">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <MapPin className="w-6 h-6 text-black" />
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-gray-600 text-sm">Sector 62, Noida, India</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="col-span-2 md:col-span-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-2 md:col-span-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="col-span-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="col-span-2 text-center mt-2">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
