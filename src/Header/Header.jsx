import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex h-11 w-full items-center  bg-blue-500 justify-around">
            <h1 className="text-2xl text-white"><Link to={'/'}>Piyush</Link></h1>
            <div className="">
                <ul className="flex justify-around w-96">
                    <li><NavLink className={({ isActive }) =>
                        ` ${isActive ? "text-blue-50" : "text-blue-300"}`
                    } to='/' >Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        ` ${isActive ? "text-blue-50" : "text-blue-300"}`} to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        ` ${isActive ? "text-blue-50" : "text-blue-300"}`} to='/contact'>Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        ` ${isActive ? "text-blue-50" : "text-blue-300"}`} to='/github'>Github</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header