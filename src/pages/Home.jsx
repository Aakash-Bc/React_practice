import React from "react";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6">
                        Home Page
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                        Discover amazing features and beautiful design elements
                    </p>
                </div>

                {/* Content Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Innovative Solutions</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Innovative approaches to modern web development with cutting-edge technologies.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Lightning Performance</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Optimized for speed and efficiency across all devices and platforms.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Flexible Customization</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Fully customizable components that adapt to your unique requirements.
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Secure & Reliable</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Built with security best practices and reliable infrastructure.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-center text-white">
                    <h2 className="text-4xl font-black mb-4">Ready to Get Started?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join thousands of users who trust our platform</p>
                    <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;