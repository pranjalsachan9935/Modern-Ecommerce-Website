import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Aisha Sharma",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Absolutely loved the shopping experience! Fast delivery and the quality exceeded my expectations.",
  },
  {
    id: 2,
    name: "Neha Patel",
    role: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    feedback:
      "Trendy collection and budget-friendly prices. Highly recommend this store to everyone!",
  },
  {
    id: 3,
    name: "Rohit Mehra",
    role: "Frequent Customer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Great customer service and seamless checkout. Definitely my go-to store now.",
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    feedback:
      "Trendy collection and budget-friendly prices. Highly recommend this store to everyone!",
  },
  {
    id: 5,
    name: "Aisha Roi",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "Absolutely loved the shopping experience! Fast delivery and the quality exceeded my expectations.",
  },
];

export default function Testimonial() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-muted overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-primary">
          What Our Customers Say
        </h2>

        <div className="relative">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="testimonial-card sm:basis-full md:basis-1/2 lg:basis-1/3 "
                >
                  <Card className="p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="flex flex-col items-center text-center">
                      <Avatar className="mb-4 w-16 h-16">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-sm text-muted-foreground mb-4">
                        "{testimonial.feedback}"
                      </p>
                      <div className="font-medium text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
