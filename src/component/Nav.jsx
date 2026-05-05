import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                    Brand.AaKaSh
                </Link>
                
                <ul className="flex gap-1 text-sm font-semibold">
                    <li>
                        <Link to="/" className="px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                            Hero
                        </Link>
                    </li>
                    <li>
                        <Link to="/home" className="px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="px-4 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/form" className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
