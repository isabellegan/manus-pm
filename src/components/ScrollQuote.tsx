import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface ScrollQuoteProps {
  quote: string;
}

export function ScrollQuote({ quote }: ScrollQuoteProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl text-[var(--forest-green)] italic">
          "{quote}"
        </p>
      </motion.div>
    </div>
  );
}
