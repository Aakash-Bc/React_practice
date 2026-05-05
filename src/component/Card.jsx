import { Link } from "react-router-dom";

function Card({ id, title, content, author, date }) {
    return (
        <Link
            to={`/blog/${id}`}
            state={{ id, title, content, author, date }}
            className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-2"
        >
            <div className="h-48 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center p-8 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                <span className="text-xl font-bold opacity-90 relative z-10">{title}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full">Article</span>
                    <span className="text-xs text-slate-400 font-medium">{date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {content}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-md">
                            {author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">{author}</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Author</p>
                        </div>
                    </div>
                    <span className="text-xs text-blue-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default Card;
