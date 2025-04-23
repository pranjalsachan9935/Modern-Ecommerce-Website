import { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Fashion", icon: "👗" },
  { name: "Home Appliances", icon: "🧹" },
  { name: "Beauty & Health", icon: "💄" },
  { name: "Groceries", icon: "🛒" },
  { name: "Sports", icon: "🏀" },
  { name: "Toys", icon: "🧸" },
  { name: "Books", icon: "📚" },
];

export default function Categories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-5 px-4 relative bg-white text-black">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">
          Shop by Category
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-7 top-1/2 -translate-y-1/2 z-10 text-black hover:text-gray-600 transition-all w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-7 top-1/2 -translate-y-1/2 z-10 text-black hover:text-gray-600 transition-all w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-hidden overflow-y-hidden no-scrollbar"
          >
            <div className="flex gap-4 md:gap-6 w-max px-1">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="min-w-[140px] sm:min-w-[160px] rounded-2xl bg-white border border-gray-300 hover:border-black hover:shadow-md transition-all duration-200 p-5 flex flex-col items-center justify-center text-center cursor-pointer"
                >
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <div className="text-sm font-medium text-gray-800">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
