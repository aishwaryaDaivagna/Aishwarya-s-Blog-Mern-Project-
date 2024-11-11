import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signout from './pages/Signout'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/Signout' element={<Signout />} />
      <Route path='/Dashboard' element={<Dashboard />} />

    </Routes>
    </BrowserRouter>
  )
}
