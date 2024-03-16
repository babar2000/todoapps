import React from "react";

const Footer = () => {
    return (
        <footer className="p-4 text-center text-white bg-blue-500 dark:bg-[#091319] dark:text-[#9eb8cf]">
            <p>&copy; {new Date().getFullYear()} ZB Aliance. All content is protected by intellectual property laws.</p>
        </footer>
    );
};

export default Footer;