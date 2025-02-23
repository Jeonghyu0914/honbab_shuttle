import React from "react";
import smoothScroll from "../utils/smoothScroll.js"; // 스크롤 함수 분리

// Header Component
const Header = ({ isTransparent }) => {
  return (
    <header className={`sticky top-0 z-50 sm:p-4 p-1 transition-all duration-300 ${isTransparent ? "sm:bg-transparent" : "sm:bg-black text-white"} bg-black flex justify-between items-center w-full`}>
      <a href="#main" onClick={(e) => smoothScroll(e, "main")} className=" relative z-10 cursor-pointer select-none">
        <img src="logo.jpeg" className="w-20 h-auto select-none pointer-events-auto" />
      </a>
      <nav className="flex justify-center items-center absolute inset-0">
        <ul className="flex space-x-2 sm:space-x-4 text-xs sm:text-xl">
          <li>
            <a href="#main" onClick={(e) => smoothScroll(e, "main")} className="hover:underline">
              브랜드
            </a>
          </li>
          <li>
            <a href="#categoryNav" onClick={(e) => smoothScroll(e, "categoryNav")} className="hover:underline">
              메뉴
            </a>
          </li>
          <li>
            <a href="#buisness" onClick={(e) => smoothScroll(e, "business")} className="hover:underline">
              창업
            </a>
          </li>
          <li>
            <a href="#contect" onClick={(e) => smoothScroll(e, "contect")} className="hover:underline">
              가맹문의
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="YouTube" className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;
