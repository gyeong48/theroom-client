import React from 'react';
import DropDownMenu from './DropDownMenu';
import MenuButton from './MenuButton';

const Header = () => {
    const items = [
        { src: "/assets/icons/portfolio.png", menu: "포트폴리오관리" },
        { src: "/assets/icons/contact.png", menu: "견적문의관리" },
        { src: "/assets/icons/account.png", menu: "계정관리" },
    ]

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex justify-between items-center p-4">
                {/* 회사 로고 */}
                <div className="text-2xl font-bold text-gray-800">MyLogo</div>

                {/* 드롭다운 메뉴들 */}
                <div className="flex justify-center items-center">
                    {
                        items.map((item, index) => (
                            <DropDownMenu key={index} src={item.src} menu={item.menu}></DropDownMenu>
                        ))
                    }
                </div>

                {/* 로그아웃 버튼 */}
                <MenuButton src={"/assets/icons/signout.png"} menu={"로그아웃"} />
            </div>
        </header>
    );
};

export default Header;
