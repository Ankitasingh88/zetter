'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Homepage slider component
// Shows the marketing images in a rotating banner
// Spent some time getting the auto-scroll timing right

interface SliderProps {
  images: Array<{ src: string; alt: string }>;
  height?: string;
  autoScrollDelay?: number;
  showCounter?: boolean;
}

export default function ImageSlider({ 
  images, 
  height = 'h-[500px] md:h-[600px]', 
  autoScrollDelay = 5000,
  showCounter = true 
}: SliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-scroll timer
  // Changes image every few seconds automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % images.length);
    }, autoScrollDelay);

    return () => clearInterval(interval);
  }, [images.length, autoScrollDelay]);

  // Navigation functions
  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveSlide((current) => (current - 1 + images.length) % images.length);
  };

  const jumpToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden bg-neutral-light`}>
      
      {/* Slider images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={images[activeSlide].src}
            alt={images[activeSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-burgundy rounded-full p-3 shadow-lg transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-burgundy rounded-full p-3 shadow-lg transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpToSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              activeSlide === idx
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 hover:bg-white/80 w-3 h-3'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      {showCounter && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
          {activeSlide + 1} / {images.length}
        </div>
      )}
    </div>
  );
}