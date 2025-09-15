import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const promos = [
  {
    id: 1,
    text: "Free shipping on all orders over $50",
    link: "#",
    bgColor: "bg-indigo-600"
  },
  {
    id: 2,
    text: "Summer sale! Use code SUMMER20 for 20% off",
    link: "#",
    bgColor: "bg-rose-600"
  },
  {
    id: 3,
    text: "New arrivals just dropped! Shop now",
    link: "#",
    bgColor: "bg-amber-600"
  }
];

const PromoBar: React.FC = () => {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dismissed) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentPromo((prev) => (prev + 1) % promos.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) {
    return null;
  }

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev - 1 + promos.length) % promos.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
      setIsAnimating(false);
    }, 300);
  };

  const promo = promos[currentPromo];

  return (
    <div className={`${promo.bgColor} text-white py-2 relative`}>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <button 
          onClick={handlePrev}
          className="absolute left-4 text-white/80 hover:text-white transition-colors"
          aria-label="Previous promotion"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="text-center px-8 relative overflow-hidden h-6">
          <a 
            href={promo.link}
            className={`block transition-all duration-500 ${
              isAnimating ? 'opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            {promo.text}
          </a>
        </div>
        
        <button 
          onClick={handleNext}
          className="absolute right-12 text-white/80 hover:text-white transition-colors"
          aria-label="Next promotion"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => setDismissed(true)}
          className="absolute right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close promotion bar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBar;
