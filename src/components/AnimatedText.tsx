import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
}

export default function AnimatedText({ text, className = '', id }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={containerRef}
      className={`${className} inline-flex flex-wrap justify-center`}
      id={id}
    >
      {characters.map((char, index) => {
        // Calculate the relative window for this character
        const start = index / total;
        const end = Math.min(1, (index + 2) / total + 0.1); 
        
        return (
          <Character
            key={index}
            char={char}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  key?: number | string;
}

function Character({ char, scrollYProgress, start, end }: CharacterProps) {
  // Map local scroll progress to an opacity value from 0.2 to 1
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for layout preservation */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 h-full w-full inline-block"
      >
        {char}
      </motion.span>
    </span>
  );
}
