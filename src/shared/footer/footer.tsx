import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
                Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
                Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
                Contact
            </a>
            </nav>
        </div>
        </footer>
    );
    };

export default Footer;
