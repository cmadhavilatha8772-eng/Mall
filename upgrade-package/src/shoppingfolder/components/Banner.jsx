import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: 'assets/GentsBanner.gif',
    eyebrow: 'End of Season Sale',
    title: '50–70% OFF',
    cta: 'Shop Men',
    to: '/men',
  },
  {
    image: 'assets/LadiesBanner.gif',
    eyebrow: "Women's Collection",
    title: '30–60% OFF',
    cta: 'Explore Collection',
    to: '/women',
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = SLIDES[index];

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden md:h-[420px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.eyebrow}
        className="h-full w-full object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 bg-black/30 px-8 text-white md:px-16">
        <p className="text-sm font-medium tracking-wide md:text-base">{slide.eyebrow}</p>
        <h1 className="text-3xl font-bold md:text-5xl">{slide.title}</h1>
        <Link to={slide.to} className="btn-primary mt-3">
          {slide.cta}
        </Link>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
