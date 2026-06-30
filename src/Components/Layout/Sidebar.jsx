import {
    Badge, BarChart3, Calendar, ChevronDown, ChevronUp, CreditCard, FileText, LayoutDashboard,
    MessageSquare, Package, Settings, ShoppingBag, Users, Zap
} from 'lucide-react'

import React, { useState } from 'react'
import { HiMiniUserCircle } from "react-icons/hi2"
import userImg from "./../../assets/images/adminImg.png"


const menuItems = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        Badge: "New",
    },
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu: [
            { id: "overwiew", label: "Overwiew" },
            { id: "reports", label: "Reports" },
            { id: "insights", label: "Insights" },
        ],
    },
    {
        id: "users",
        icon: Users,
        label: "Users",
        count: "2.4k",
        submenu: [
            { id: "all-users", label: "All Users" },
            { id: "roles", label: "Roles & Permissions" },
            { id: "activity", label: "User Activity" },
        ],
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "E-commerce",
        submenu: [
            { id: "products", label: "Products" },
            { id: "order", label: "Order" },
            { id: "customers", label: "Customers" },
        ],
    },
    {
        id: "inventory",
        icon: Package,
        label: "Inventory",
        count: "847",
    },
    {
        id: "transactions",
        icon: CreditCard,
        label: "Transactions"
    },
    {
        id: "message",
        icon: MessageSquare,
        label: "Message",
        Badge: "12",
    },
    {
        id: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        id: "reports",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "setting",
        icon: Settings,
        label: "Settings",
    },
]

const Sidebar = ({ showSideBar, currentPage, onPageChanged }) => {

    const [showSubMenu, setShowSubMenu] = useState(null)

    return (
        <div className={`${!showSideBar ? "w-14" : "w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52"} 'transition duration-300 
        ease-in-out bg-white/80 dark:bg-slate-900/80
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col items-start
    relative z-10'`}>
            {/** logo */}
            <div className='p-4 md:mr-3 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center justify-start space-x-2'>
                    <div className="text-left w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
                    flex items-center justify-center shadow-lg">
                        <Zap className='w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white' />
                    </div>

                    {/**conditional rendering */}
                    {showSideBar && (
                        <div>
                            <h1 className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800 dark:text-white'>
                                Nexus
                            </h1>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
                        </div>
                    )}
                </div>
            </div>

            {/**navigation */}
            <nav className={`flex-1 overflow-y-auto ${showSideBar ? "space-y-3 p-2" : "space-y-5 p-3"}`}>
                {menuItems.map((item) => (
                    <div key={item.id} onClick={() => onPageChanged(item.id)}>
                        <button className={`w-full flex items-center justify-start p-1 rounded-xl
                            transition-all duration-200 ${currentPage === item.id ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 " :
                                "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}>
                            <div className='flex items-center space-x-1 '>
                                <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5  ${!showSideBar && "w-5 h-4 sm:w-4 sm:h-5 md:w-5"}`} />
                                {/**conditional rendering */}
                                <>
                                    {showSideBar && (
                                        <div>
                                            <span className='text-xs sm:text-sm lg:text-base font-semibold mx-1 py-1'>{item.label}</span>

                                            {item.Badge && (
                                                <span className='py-1 px-1 md:px-2 text-xs bg-red-500 text-white rounded-full'>{item.Badge}</span>
                                            )}
                                            {item.count && (
                                                <span className='py-1 px-1 md:px-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-200
                                    dark:bg-slate-700 rounded-full'>{item.count}</span>
                                            )}
                                        </div>

                                    )}

                                </>
                            </div>
                            {showSideBar && item.submenu && (<ChevronDown onClick={() => setShowSubMenu(showSubMenu === item.id ? null : item.id)}
                                className='w-4 h-4 transition-transform' />)}
                        </button>

                        {/** submenu */}
                        {showSideBar && item.submenu && showSubMenu === item.id && (
                            <div className=' mt-2 p-1 space-y-1 shadow rounded-lg dark:bg-slate-800/70'>
                                {item.submenu.map((subItem) => (
                                    <button className='w-full text-left text-xs sm:text-sm p-0.5 sm:p-1 md:p-2 text-slate-600 dark:text-slate-400
                                     hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl
                                     transition-all'
                                        key={subItem.id}>{subItem.label}</button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* *User profile */}
            {showSideBar && (
                <div className='w-full border-t border-slate-400/50 bg-white/60 transition-all duration-500'>
                    <div className='flex items-start justify-start space-x-1 p-3'>
                        <img src={userImg} className='w-8 h-8 mr-2 rounded-full ring-2 ring-blue-500' />
                        <div className='flex-1 min-w-0'>
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>AlirezaEst</p>
                                <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar
