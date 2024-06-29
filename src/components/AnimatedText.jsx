// React component
import { useRef, useEffect, useState } from "react";
import "../index.css"; // Assuming your CSS file is named styles.css

const AnimatedParagraph = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "-50px 0px", // Adjust rootMargin as needed
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <p
      ref={paragraphRef}
      style={{marginBottom: 40}}
      className={`${
        isVisible ? "animate-right" : ""
      } special-elite-regular my-4 list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
    >
      {text}
    </p>
  );
};

export default AnimatedParagraph;
