import { Menu, Search, Filter, Plus, Sun, Bell, Settings, ChevronDown, Moon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import userImg from "./../../assets/images/adminImg.png"

const Header = ({ onToggleSideBar, showSideBar }) => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    })
    return (
        <div className='w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl BORDER-B border-slate-200/50
    dark:border-slate700/50 p-3'>
            <div className='flex items-center justify-between'>
                {/**left section */}
                <div className='flex items-center space-x-2'>
                    <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                        onClick={onToggleSideBar}>
                        <Menu className='w-4 h-4 sm:w-5 sm:h-5' />
                    </button>
                    <div className='hidden sm:block'>
                        <h1 className=' md:text-base lg:text-lg xl:text-xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
                        <p className='hidden lg:block text-xs dark:text-white'>Welcome back, Alireza! here's what's happening today</p>
                    </div>
                </div>

                {/**center section */}
                <div className='flex-1 max-w-md mx-10'>
                    <div className='relative'>
                        <Search className='w-3 h-3 md:w-4 md:h-4 absolute left-1 top-1/2 transform -translate-y-1/2 text-slate-400' />
                        <input type='text' placeholder='Search Anything' className='text-xs lg:text-sm md:text-sm w-full pl-5 md:pl-6 py-1.5 bg-slate-100
                    dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800
                    dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
                    focus:ring-blue-500 focus:border-transparent transition-all'/>
                    </div>
                </div>

                {/** right sectio  */}
                <div className='flex items-center md:space-x-1 lg:space-x-2'>

                    {/**quic action */}
                    <button className='hidden lg:flex items-center space-x-1 py-1 px-2
                bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-md
                transition-all'>
                        <Plus className='w-3 h-3' />
                        <span className='text-sm font-medium'>New</span>
                    </button>

                    {/** Toggle  */}
                    <button className='p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
                transition-colors'
                        onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun className='w-4 h-4 md:w-5 md:h-5' /> : <Moon className='w-4 h-4 md:w-5 md:h-5' />}
                    </button>

                    {/**notification */}
                    <button className='relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100  dark:hover:bg-slate-800
                transition-color'>
                        <Bell className='w-4 h-4 md:w-5 md:h-5' />
                        <span className='absolute -top-1.5 w-4 h-4 bg-red-600 text-white text-xs
                    rounded-full flex items-center justify-center'>3</span>
                    </button>

                    {/**setting */}
                    <button className='relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
                transition-color'>
                        <Settings className='w-4 h-4 md:w-5 md:h-5' />
                    </button>

                    {/* *user profile */}
                    {!showSideBar && <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
                dark:border-slate-700'>
                        <img src={userImg} className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full ring-2 ring-blue-500' />
                        <div className='hidden md:block'>
                            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>AlirezaEst</p>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                        </div>
                        <ChevronDown className='w-4 h-4 text-slate-400' />
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Header
