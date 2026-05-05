import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function BlogDetail() {
    const { id } = useParams();
    const location = useLocation();
    const blog = location.state;

    if (!blog) {
        return (
            <div className="pt-32 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                    <h2 className="text-4xl font-black text-slate-800 mb-4">Blog not found</h2>
                    <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 shadow-lg transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Back link */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-10 group px-4 py-2 rounded-xl hover:bg-blue-50 transition-all">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back to Blog
                </Link>

                {/* Hero banner */}
                <div className="h-80 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mb-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <h1 className="text-4xl md:text-5xl font-black text-white text-center px-12 relative z-10 leading-tight">{blog.title}</h1>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-10 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                        {blog.author.charAt(0)}
                    </div>
                    <div className="flex-grow">
                        <p className="text-base font-bold text-slate-900">{blog.author}</p>
                        <p className="text-sm text-slate-500">{blog.date}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-4 py-2 bg-blue-50 rounded-full">Article</span>
                </div>

                {/* Content */}
                <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-10 md:p-12">
                    <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>
                </article>

                {/* Share Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
                    <h3 className="text-2xl font-black mb-3">Enjoyed this article?</h3>
                    <p className="text-blue-100 mb-6">Share it with your friends and colleagues</p>
                    <div className="flex gap-4 justify-center">
                        <button className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold transition-all">
                            Share
                        </button>
                        <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all shadow-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
