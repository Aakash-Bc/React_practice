import { useState } from 'react'
import './App.css'
import Nav from './component/nav'
import Hero from './component/Hero'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(0)

  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        {/* Default route shows Hero */}
        <Route path="/" element={<Hero />} />
        
        {/* /home route shows the Home component */}
        <Route path="/home" element={<Home />} />

        {/* /blog route shows the Blog page */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

