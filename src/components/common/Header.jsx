import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        {/* 로고 */}
        <div className="text-2xl font-bold text-gray-800">MyLogo</div>

        {/* 햄버거 메뉴 버튼 (화면이 작아지면 나타남) */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* 메뉴 리스트 */}
        <ul className={`md:flex md:flex-row md:justify-end md:space-x-4 md:space-y-0 md:items-center md:static md:top-auto md:left-auto md:p-0 ${isMenuOpen ? "flex" : "hidden"} flex-col space-x-0 space-y-4 absolute p-4 top-full left-0 w-full`}>
          <li>
            <a href="#" className="text-lg">About</a>
          </li>
          <li>
            <a href="#" className="text-lg">Brand</a>
          </li>
          <li>
            <a href="#" className="text-lg">Services</a>
          </li>
          <li>
            <a href="#" className="text-lg">Portfolio</a>
          </li>
          <li>
            <a href="#" className="text-lg">Contact</a>
          </li>
          <li>
            <a href="#">
              <img
                src="/logo/instagram.png"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img 
                src="/logo/blog.png" 
                alt="blog" 
                className="w-6 h-6"    
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/logo/youtube.png"
                alt="youtube"
                className="w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
