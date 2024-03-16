import React, { FC } from "react";
import sunImg from "@/assets/images/sun.svg";
import moonImg from "@/assets/images/moon.svg";
import Image from "next/image";

interface HeaderProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Header: FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <header className="flex justify-between items-center py-4 px-3 text-2xl bg-blue-500 dark:bg-[#091319] text-white dark:text-[#9eb8cf]">
            <div>
                <h1 className="text-4xl font-semibold">Todo</h1>
            </div>
            <button onClick={toggleDarkMode} className="p-2">
                <Image src={isDarkMode ? moonImg : sunImg} alt={isDarkMode ? "Moon" : "Sun"} />
            </button>
        </header>
    );
};

export default Header;
