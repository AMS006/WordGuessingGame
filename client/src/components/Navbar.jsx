import React from 'react'
import Logo from '../logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/user/Api'

function NavbarLg({handleLogout,pathname}){
    return(
            <div className='flex justify-between py-4 px-12 shadow-lg sticky top-0 z-10'>
              <div className='flex gap-2 items-center'>
                <img src={Logo} alt="" className='md:w-32 w-24 h-auto bg-cover'/>
                <h2 className='text-white md:text-2xl text-lg font-mono font-semibold'>Cryptic Conundrum</h2>
              </div>
              <div className='flex gap-6 font-semibold items-center font-sans text-lg'>
                <Link to='/' className={`${pathname==='/'?'border-b-2 border-white':''}`}>Home</Link>
                <Link to='/leaderboard' className={`${pathname==='/leaderboard'?'border-b-2 border-white':''}`}>Leaderboard</Link>
                <button onClick={handleLogout} className='px-2 py-1 border rounded-xl hover:bg-white transition-colors duration-200 hover:text-[#2b2121] border-white text-white font-semibold'>Logout</button>
              </div>
            </div>
    )
}
function NavbarSm({handleLogout,pathname}){
    return(
        <div className='flex flex-col  py-2 sm:px-4 px-2 gap-6'>
            <div className='flex justify-between gap-4 items-center py-2'>
                <div className='flex gap-2 items-center'>
                    <img src={Logo} alt="" className='w-20 h-auto'/>
                    <h2 className='text-white sm:text-lg font-mono font-semibold'>Cryptic Conundrum</h2>
                </div>
                <button onClick={handleLogout} className='px-2 py-1 border rounded-xl hover:bg-white transition-colors duration-200 hover:text-[#2b2121] border-white text-white font-semibold'>Logout</button>
            </div>
            <div className='flex gap-6 font-semibold items-center justify-center font-sans text-lg'>
              <Link to='/' className={`${pathname==='/'?'bg-white text-[#2c1e1e]':''} px-4 py-1 rounded-lg border border-white `}>Home</Link>
              <Link to='/leaderboard' className={`${pathname==='/leaderboard'?'bg-white text-[#2c1e1e]':''} px-4 py-1 rounded-lg border border-white `}>Leaderboard</Link>
            </div>
        </div>
    )
}
function Navbar() {
    const dispatch = useDispatch()
    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch(logout())
    }
    const {pathname} = useLocation()
    return(
        <div>
            <div className='md:block hidden'>
                <NavbarLg handleLogout={handleLogout} pathname={pathname}/>
            </div>
            <div className='md:hidden block'>
                <NavbarSm handleLogout={handleLogout} pathname={pathname}/>
            </div>
        </div>
    )
}

export default Navbar
