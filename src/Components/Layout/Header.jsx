import { Menu, Search,Filter, Plus, Sun, Bell, Settings, ChevronDown} from 'lucide-react'
import React from 'react'
import userImg from "./../../assets/images/adminImg.png"

const Header = ({onToggleSideBar}) => {
  return (
    <div className='w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl BORDER-B border-slate-200/50
    dark:border-slate700/50 p-3'>
        <div className='flex items-center justify-between'>
            {/**left section */}
            <div className='flex items-center space-x-2'>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                onClick={onToggleSideBar}>
                    <Menu className='w-5 h-5'/>
                </button>
                <div className='hidden md:block'>
                    <h1 className='text-xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
                    <p className='text-xs'>Welcome back, Alireza! here's what's happening today</p>
                </div>
            </div>

            {/**center section */}
            <div className='flex-1 max-w-md mx-10'>
                <div className='relative'>
                    <Search className='w-4 h-4 absolute left-1 top-1/2 transform -translate-y-1/2 text-slate-400'/>
                    <input type='text' placeholder='Search Anything' className='w-full pl-6 pr-4 py-1.5 bg-slate-100
                    dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800
                    dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
                    focus:ring-blue-500 focus:border-transparent transition-all'/>
                    <button className='absolute right-1 top-1/2 transform -translate-y-1/2 p-1.5
                    text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'>
                        {/* <Filter/> */}
                    </button>
                </div>
            </div>

            {/** right sectio  */}
            <div className='flex items-center space-x-2'>

                {/**quic action */}
                <button className='hidden lg:flex items-center space-x-1 py-1 px-2
                bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-md
                transition-all'>
                    <Plus className='w-3 h-3'/>
                    <span className='text-sm font-medium'>New</span>
                </button>

                {/** Toggle  */}
                <button className='p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800
                transition-colors'>
                    <Sun className='w-5 h-5'/>
                </button>

                {/**notification */}
                <button className='relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-800
                transition-color'>
                    <Bell className = "w-5 h-5"/>
                    <span className='absolute -top-1.5 w-4 h-4 bg-red-600 text-white text-xs
                    rounded-full flex items-center justify-center'>3</span>
                </button>

                {/**setting */}
                <button className='relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-800
                transition-color'>
                    <Settings className='w-5 h-5'/>
                </button>

                {/**user profile */}
                <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
                dark:border-slate-700'>
                    <img src={userImg} className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full ring-2 ring-blue-500'/>
                    <div className='hidden md:block'>
                        <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>AlirezaEst</p>
                        <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                    </div>
                    <ChevronDown className='w-4 h-4 text-slate-400'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
