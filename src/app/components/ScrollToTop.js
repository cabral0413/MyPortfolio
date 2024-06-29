
'use client';

import React from "react";
import Image from "next/image";
import UpIcon from '/public/up2.png'; 

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center mb-2">
      <a onClick={scrollToTop} className="cursor-pointer">
        <Image
          src={UpIcon} // Ensure the path is correct
          alt="Scroll to top"
          width={80}
          height={80}
          className="animate-bounce"
        />
      </a>
    </div>
  );
};

export default ScrollToTop;
