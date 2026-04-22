

function Card({ title, content, author, date }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-6 text-white text-center">
                <span className="text-xl font-medium opacity-80">{title}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-2 py-1 bg-blue-50 rounded">Article</span>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {content}
                </p>
                <div className="flex items-center pt-4 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 mr-3">
                        {author.charAt(0)}
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-900">{author}</p>
                        <p className="text-[10px] text-gray-400 uppercase">Author</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
