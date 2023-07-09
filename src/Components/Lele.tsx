"use client"

// Import tailwind CSS
import 'tailwindcss/tailwind.css';

// Import useState hook
import { useState } from 'react';

const YourComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${isExpanded ? 'h-full' : 'h-[70px]'} w-10 bg-blue-500 transition-all duration-500`}
      onClick={handleClick}
    >
      {/* Content */}
    </div>
  );
};

export default YourComponent;