
import React, { useState } from 'react'
import Sidebar from './Components/Layout/Sidebar'
import Header from './Components/Layout/Header'
const App = () => {

  const [showSideBar, setShowSideBar] = useState(true)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar 
        showSideBar={showSideBar} 
        onToggle={() => setShowSideBar(!showSideBar)}
        currentPage = {currentPage}
        onPageChanged = {setCurrentPage}/>
        
        <div className='flex flex-1 flex-col overflow-hidden'>
          <Header showSideBar={showSideBar} onToggleSideBar = {() => setShowSideBar(!showSideBar)}/>
        </div>

      </div>
    </div>
  )
}

export default App
