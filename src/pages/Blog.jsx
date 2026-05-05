import React, { useState } from "react";
import Card from "../component/Card";

function Blog() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Getting Started with React",
            content: "React is a powerful library for building user interfaces. It allows you to create reusable components and manage state efficiently.",
            author: "Aakash",
            date: "April 22, 2026"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            content: "Tailwind CSS has changed the way we think about styling. Its utility-first approach makes building beautiful designs faster than ever.",
            author: "Aakash",
            date: "April 21, 2026"
        },
        {
            id: 3,
            title: "Modern JavaScript Features",
            content: "Explore the latest JavaScript features including async/await, destructuring, and arrow functions that make coding more efficient.",
            author: "Aakash",
            date: "April 20, 2026"
        }
    ]);

    const [form, setForm] = useState({ title: "", content: "", author: "Aakash" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.content) return;

        const newBlog = {
            ...form,
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };

        setBlogs([newBlog, ...blogs]);
        setForm({ title: "", content: "", author: "Aakash" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-20 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <header className="mb-16 text-center">
                    <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 tracking-tight">
                        Our Blog
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">Explore our latest thoughts, ideas, and shared stories from the community.</p>
                </header>

                {/* Post Blog Form */}
                <section className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 mb-20">
                    <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
                        <div className="w-2 h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                        Create New Post
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <label className="text-sm font-semibold text-slate-700 ml-1 mb-2 block">Blog Title</label>
                            <input 
                                type="text" 
                                placeholder="Enter an engaging title..." 
                                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                                value={form.title}
                                onChange={(e) => setForm({...form, title: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-slate-700 ml-1 mb-2 block">Content</label>
                            <textarea 
                                placeholder="Share your story with the world..." 
                                rows="5" 
                                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none placeholder:text-slate-400"
                                value={form.content}
                                onChange={(e) => setForm({...form, content: e.target.value})}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98] transition-all"
                        >
                            Publish Post
                        </button>
                    </form>
                </section>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <Card 
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            content={blog.content}
                            author={blog.author}
                            date={blog.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
