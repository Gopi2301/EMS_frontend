import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Analysis from './components/pages/Analysis'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
// import {Analysis, Dashboard, Home } from './components/pages'

function App() {

  return (
    <main >
    <Navbar/>
    <Routes>
      <Route path='/analysis' element={<Analysis />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    <h1 className="text-3xl font-bold underline">
      Hello World!
    </h1>

    </main>
  )
}

export default App
