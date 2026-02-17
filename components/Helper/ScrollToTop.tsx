"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "300px";
    sentinel.style.height = "1px";
    sentinel.style.width = "1px";
    sentinel.style.pointerEvents = "none";
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <a
          href="#home"
          className="p-2 bg-purple-200 dark:bg-blue-900 text-purple-800 dark:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-purple-300 dark:hover:bg-blue-700 transition-colors duration-300"
        >
          <FaArrowUp />
        </a>
      )}
    </div>
  );
};

export default ScrollToTop;
