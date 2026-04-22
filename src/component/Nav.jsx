import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Brand. AaKaSh
            </Link>
            <ul className="flex gap-8 text-sm font-medium text-gray-600">
                <li className="hover:text-blue-600 transition-colors duration-300">
                    <Link to="/">Hero</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                    <Link to="/home">Home</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors duration-300">
                    <Link to="/form">Form</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Nav;
