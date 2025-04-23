import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Subscribe() {
  const [openForm, setOpenForm] = useState(false);

  const handleForm = () => {
    setOpenForm((prev) => !prev);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <section className="bg-black text-white h-[70vh] px-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Upgrade Your Style?
        </h3>
        <p className="text-lg mb-6">
          Get exclusive access to new drops and discounts.
        </p>
        <Button
          onClick={handleForm}
          className="text-lg px-6 py-4 bg-white text-black hover:bg-gray-200"
        >
          Join Now
        </Button>
      </section>

      {openForm && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="relative bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center text-black">
              Join the Community
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Get early access to new arrivals, exclusive discounts, and style tips.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Join Now
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
