import { useState } from 'react'
import './App.css'
import Nav from './component/nav'
import Hero from './component/Hero'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(0)

  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        {/* Default route shows Hero and the counter section */}
        <Route path="/" element={
          <div className="pt-20">
            <Hero />
            <div className='max-w-4xl mx-auto px-4 mt-8'>
              <h1 className='text-center text-4xl font-bold text-gray-800 mb-8'>Local State Counter</h1>
              <div className='bg-white shadow-xl rounded-2xl p-8 border border-gray-100 flex flex-col gap-4'>
                <button 
                  className='py-4 px-6 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all'
                  onClick={() => setCount(count + 1)}
                >
                  Increment: {count}
                </button>
                <button 
                  className='py-4 px-6 rounded-xl text-gray-700 font-bold border-2 border-gray-100 hover:bg-gray-50 transition-all'
                  onClick={() => setName(name - 1)}
                >
                  Decrement: {name}
                </button>
              </div>
            </div>
          </div>
        } />
        
        {/* /home route shows the Home component */}
        <Route path="/home" element={<Home />} />

        {/* /blog route shows the Blog page */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

