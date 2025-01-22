import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        {/* 로고 */}
        <Link to={"/"}><div className="text-2xl font-bold text-gray-800">MyLogo</div></Link>

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
        <ul className={`md:flex md:flex-row md:justify-end md:space-x-4 md:space-y-0 md:items-center md:static md:top-auto md:left-auto md:p-0 md:h-0 md:opacity-100 ${isMenuOpen ? "flex" : "hidden"} flex-col space-x-0 space-y-4 absolute p-4 top-full left-0 w-full h-screen bg-white opacity-80`}>
          <li>
            <Link to={"/admin/account"} className="text-lg md:text-base font-body font-semibold hover:text-gray-300">계정관리</Link>
          </li>
          <li>
            <Link to={"/admin/portfolio"} className="text-lg md:text-base font-body font-semibold hover:text-gray-300">포트폴리오관리</Link>
          </li>
          <li>
            <Link to={"/admin/contact"} className="text-lg md:text-base font-body font-semibold hover:text-gray-300">견적문의관리</Link>
          </li>
          <li>
            <Link to={"#"} className="text-lg md:text-base font-body font-semibold hover:text-gray-300">로그아웃</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
