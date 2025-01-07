import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='flex px-2 py-5 w-full shadow-navbar-bottom'>
    <div className='flex-1 gap-1 px-5'>
    <div className='flex gap-1'>
    <img src='/logo.svg' alt='logo' width={20} height={20}/>
    <p className='flex-1 text-2xl hidden sm:block'>Track Task</p>
    </div>
    </div>
    <div className='grow hidden sm:block'>
        <ul className='flex justify-between'>
        <li className=''><NavLink to="/">Home</NavLink></li>
        <li className=''><NavLink to="/dashboard">DashBoard</NavLink></li>
        <li className=''><NavLink to='/analysis'> Analysis</NavLink></li>
        </ul>
    </div>
    <div className='flex-1 gap-5'>
    <div className='flex justify-end gap-3'>
      <button ><img src='/search.svg' alt='search' /></button>
      <button className='hidden sm:block'><img src='/settings.svg' alt='settings' /></button>
      <button className='hidden sm:block'><img src='/Avatar.svg' alt='avatar' /></button>
      </div>
    </div>
    {/* Hamburger menu */}
    <div className='flex-1 block sm:hidden'>
    <button onClick={handleMenu}  className="z-50 absolute top-5 right-5 p-2 rounded-full">
    <img src={isMenuOpen ? '/close.svg' : '/hamburger.svg'} alt='menu'  width={20} height={20}/>
    </button>
     {/* Menu List */}
     {isMenuOpen && ( 
          <ul className="absolute inset-0 bg-gray-700 text-white flex flex-col items-center justify-center space-y-4 z-40">
            <li><NavLink to="/" onClick={handleMenu}>Home</NavLink></li>
            <li><NavLink to="/dashboard" onClick={handleMenu}>Dashboard</NavLink></li>
            <li><NavLink to="/analysis" onClick={handleMenu}>Analysis</NavLink></li>
            <li><NavLink to ="/settings">settings</NavLink></li>
            <li><NavLink to ="/profile">profile</NavLink></li>
          </ul>
        )}
    </div>
    </nav>
  )
}

export default Navbar