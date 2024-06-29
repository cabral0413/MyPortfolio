import React from "react";
import ScrollToTop from "./ScrollToTop"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] border-l-transparent border-r-transparent text-white relative flex flex-col items-center">
      <ScrollToTop />
      <div className="w-full p-4 flex justify-center items-center bg-[#181818]">
        <p className="text-slate-600 text-center">
          Copyright © 2024 Nipuni Cabral. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

