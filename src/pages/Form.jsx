import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setMessage({ text: "Please fill in all fields.", type: "error" });
            return;
        }

        // Add to users list locally
        const newUser = { ...formData, id: Date.now() };
        setUsers([newUser, ...users]);

        console.log("Form Submitted:", formData);
        setMessage({ text: "Successfully registered! Welcome aboard.", type: "success" });

        // Reset form after success
        setFormData({ name: "", email: "", password: "" });

        // Clear message after 3 seconds
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex flex-col items-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 mb-12">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">Create Account</h1>
                    <p className="text-blue-100 mt-2 text-sm">Join our community today</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="hello@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98]"
                    >
                        Sign Up
                    </button>

                    {message.text && (
                        <div className={`text-center p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300 ${
                            message.type === 'error' 
                            ? 'bg-red-50 text-red-600 border border-red-100' 
                            : 'bg-green-50 text-green-600 border border-green-100'
                        }`}>
                            {message.text}
                        </div>
                    )}
                </form>
            </div>
            
            {/* Registered Users Section */}
            <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 px-4 border-l-4 border-blue-600">Registered Members</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-bold text-slate-800 truncate">{user.name}</h3>
                                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-blue-600 tracking-tighter uppercase px-2 py-0.5 bg-blue-50 rounded">Member</span>
                                <span className="text-[10px] font-medium text-slate-400 italic">ID: {user.id.toString().slice(-4)}</span>
                            </div>
                        </div>
                    ))}
                    
                    {users.length === 0 && (
                        <div className="col-span-full py-16 bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                            <svg className="w-12 h-12 mb-3 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <p className="font-medium">No users registered yet</p>
                            <p className="text-sm opacity-60">Submit the form above to see participants</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;

