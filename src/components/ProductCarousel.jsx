import { useEffect, useMemo, useState } from "react";

const CARD_WIDTH = 250;
const GAP = 20;

export default function ProductCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const total = items.length;

  const trackItems = useMemo(() => {
    if (total === 0) return [];
    return [...items, ...items];
  }, [items, total]);

  useEffect(() => {
    if (total === 0) return;
    if (index === total) {
      const id = setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 500);
      return () => clearTimeout(id);
    }
  }, [index, total]);

  useEffect(() => {
    if (!transition) {
      const id = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(id);
    }
  }, [transition]);

  if (total === 0) return null;

  const handleNext = () => {
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index === 0) {
      setTransition(false);
      setIndex(total);
      setTimeout(() => {
        setTransition(true);
        setIndex(total - 1);
      }, 50);
      return;
    }
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  const translateX = -(index * (CARD_WIDTH + GAP));

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous products"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#1F6FA5] text-white p-3 shadow-card hover:bg-[#175a86] transition"
      >
        &#10094;
      </button>

      <div className="overflow-hidden">
        <div
          className="flex gap-5"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transition ? "transform 0.5s ease" : "none"
          }}
        >
          {trackItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex flex-col w-[250px] bg-white border border-primary/20 rounded-xl shadow-card overflow-hidden hover:shadow-glow hover:scale-[1.03] hover:border-primary transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-cover"
              />
              <div className="bg-secondary text-white text-sm font-semibold text-center px-3 py-3">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Next products"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#1F6FA5] text-white p-3 shadow-card hover:bg-[#175a86] transition"
      >
        &#10095;
      </button>
    </div>
  );
}
