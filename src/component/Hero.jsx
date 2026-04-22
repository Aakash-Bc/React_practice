
import { useState } from "react"; 
import Nav from "./nav";
function Hero() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    return (
        <>
            <div className="min-h-screen bg-gray-50 pt-24">
                <Nav />
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className='text-5xl font-extrabold text-gray-900 mb-8 text-center'>
                        Welcome <span className="text-blue-600">Back</span>
                    </h1>

                    <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transition-all hover:shadow-2xl'>
                        <div className="flex flex-col gap-6">
                            <button
                                className='w-full py-4 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-blue-200'
                                onClick={() => setCount((count) => count + 1)}
                            >
                                Increment Count: {count}
                            </button>

                            <button
                                className='w-full py-3 px-6 rounded-xl text-gray-700 font-medium border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all'
                                onClick={() => setName((n) => (typeof n === 'number' ? n - 1 : 0))}
                            >
                                Decrement Value: {name}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   

export default Hero;
