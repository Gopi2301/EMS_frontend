import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Analysis from './components/pages/Analysis'
import Dashboard from './components/pages/Dashboard'
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'

function App() {

  return (
    <main >
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/analysis' element={<Analysis />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path ='/signup' element={<Signup />}/>
    </Routes>
    {/* add left sidebar and right side dynamic main content */}
      <div className="main-content">
      </div>
    </main>
  )
}

export default App
