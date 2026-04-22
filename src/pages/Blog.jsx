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
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Our <span className="text-blue-600">Blog</span></h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">Explore our latest thoughts, ideas, and shared stories.</p>
                </header>

                {/* Post Blog Form */}
                <section className="w-1/3 mx-auto bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-300 mb-20">
                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                        Create New Post
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <input 
                            type="text" 
                            placeholder="Blog Title" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            value={form.title}
                            onChange={(e) => setForm({...form, title: e.target.value})}
                        />
                        <textarea 
                            placeholder="Write your story..." 
                            rows="4" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                            value={form.content}
                            onChange={(e) => setForm({...form, content: e.target.value})}
                        ></textarea>
                        <button 
                            type="submit" 
                            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98] transition-all"
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
