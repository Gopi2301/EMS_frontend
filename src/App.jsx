import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Analysis from './components/pages/Analysis'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'

function App() {

  return (
    <main >
    <Navbar/>
    <Routes>
      <Route path='/analysis' element={<Analysis />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    {/* add left sidebar and right side dynamic main content */}
    <div className="container">
      <div className="left-sidebar">
        <ul>
          <li>My Projects</li>
          <li>My Tasks</li>
          <li>Calendar</li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </div>
    </div>
    </main>
  )
}

export default App
