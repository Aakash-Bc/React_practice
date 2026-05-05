import { useState } from "react"; 
import Nav from "./nav";

function Hero() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <Nav />
                
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    {/* Hero Header */}
                    <div className="text-center mb-16 space-y-6">
                        <h1 className='text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight'>
                            Welcome Back
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                            Experience the power of modern web design with interactive counters and beautiful animations
                        </p>
                    </div>

                    {/* Counter Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Increment Card */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 transition-all hover:shadow-blue-200/50 hover:-translate-y-1 group'>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Increment Counter</h3>
                                    <p className="text-xs text-slate-500">Click to increase value</p>
                                </div>
                            </div>
                            
                            <div className="text-center mb-6">
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                                    {count}
                                </div>
                                <p className="text-sm text-slate-400 font-medium">Current Count</p>
                            </div>

                            <button
                                className='w-full py-4 px-6 rounded-2xl text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.97] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40'
                                onClick={() => setCount((count) => count + 1)}
                            >
                                Increment +1
                            </button>
                        </div>

                        {/* Decrement Card */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 transition-all hover:shadow-purple-200/50 hover:-translate-y-1 group'>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Decrement Counter</h3>
                                    <p className="text-xs text-slate-500">Click to decrease value</p>
                                </div>
                            </div>
                            
                            <div className="text-center mb-6">
                                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                                    {name}
                                </div>
                                <p className="text-sm text-slate-400 font-medium">Current Value</p>
                            </div>

                            <button
                                className='w-full py-4 px-6 rounded-2xl text-white font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:scale-[0.97] transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40'
                                onClick={() => setName((n) => (typeof n === 'number' ? n - 1 : 0))}
                            >
                                Decrement -1
                            </button>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Lightning Fast</h4>
                            <p className="text-sm text-slate-600">Built with React and optimized for performance</p>
                        </div>
                        
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Beautiful Design</h4>
                            <p className="text-sm text-slate-600">Modern UI with smooth animations and gradients</p>
                        </div>
                        
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Fully Responsive</h4>
                            <p className="text-sm text-slate-600">Works perfectly on all devices and screen sizes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Hero;
