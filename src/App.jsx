
import React, { useState } from 'react'
import Sidebar from './Components/Layout/Sidebar'
import Header from './Components/Layout/Header'
import Dashboard from './Components/Dashboard/Dashboard'
const App = () => {

  const [showSideBar, setShowSideBar] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 overflow-x-hidden'>
      <div className=' flex h-screen overflow-hidden'>
        <Sidebar 
        showSideBar={showSideBar} 
        onToggle={() => setShowSideBar(!showSideBar)}
        currentPage = {currentPage}
        onPageChanged = {setCurrentPage}/>
        
        <div className='flex flex-1 flex-col overflow-hidden'>
          <Header showSideBar={showSideBar} onToggleSideBar = {() => setShowSideBar(!showSideBar)}/>
            <main className='flex-1 overflow-y-auto bg-transparent'>
              <div className='p-6 space-y-6'>
                {currentPage === "dashboard" && <Dashboard />}
              </div>
            </main>
        </div>

      </div>
    </div>
  )
}

export default App
