import { MoreHorizontal, Table, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const recentData = [
    {
        id: "#3847",
        customer: "John smith",
        product: "Macbook Pro 16",
        amount: "$2,399",
        status: "completed",
        date: "2026-01-15",
    },
    {
        id: "#3848",
        customer: "Sara Johnson",
        product: "iPhone 15 Pro",
        amount: "$1,199",
        status: "pending",
        date: "2026-01-15",
    },
    {
        id: "#3849",
        customer: "Emily Davis",
        product: "AirPods pro",
        amount: "$249",
        status: "completed",
        date: "2026-01-14",
    },
    {
        id: "#3850",
        customer: "Mike Wilson",
        product: "iPad Air",
        amount: "$599",
        status: "cancelled",
        date: "2026-01-15",
    },

]

const topProducts = [
    {
        name: "Mackbook Pro 16",
        sales: 1247,
        revenue: "$2,987,530",
        trend: "up",
        change: "+12%"
    },
    {
        name: "iPhone 15 Pro",
        sales: 2156,
        revenue: "$2,587,844",
        trend: "up",
        change: "+8%"
    },
    {
        name: "AirPods Pro",
        sales: 3421,
        revenue: "$852,299",
        trend: "down",
        change: "-3%"
    },
    {
        name: "iPad Air",
        sales: 987,
        revenue: "$591,213",
        trend: "up",
        change: "+15%"
    }
]
const getStatusColor = (status) => {
    switch (status) {
        case "completed":
            return "bg-green-200 text-emerlad-800 dark:bg-green-900/30 dark:text-green-400";
        case "pending":
            return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
        case "cancelled":
            return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
        default:
            return " bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
    }
}



const TableSection = () => {
    return (
        <div className='space-y-5'>
            {/**Recent Order */}
            <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-lg
      border border-slate-200/50 dark:border-slate700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Recent Orders</h3>
                            <p className='text-sm text-slate-500 dark:text-slate-400'
                            >Latest customer Orders</p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'
                        >View All</button>
                    </div>
                </div>

                {/** table */}
                <div className='overflow-x-hidden'>
                    <table>
                        <thead>
                            <tr className='border-b border-slate-600'>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>ID</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>Product</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>Amount</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>Customer</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>Date</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600 border-r'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentData.map((item, index) => (
                                <tr key={index} className='border-b border-slate-200/50 dark:border-slate700/50
                            hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors'>
                                    <td className='p-4 border-r'>
                                        <span className='text-sm font-medium text-blue'>{item.id}</span>
                                    </td>
                                    <td className='p-4 border-r'>
                                        <span className='text-sm text-slate-800 dark:text-white'>{item.product}</span>
                                    </td>
                                    <td className='p-4 border-r'>
                                        <span className='text-sm text-slate-800 dark:text-white'>{item.amount}</span>
                                    </td>

                                    <td className='p-4 border-r'>
                                        <span className='text-sm text-slate-800 dark:text-white'>{item.customer}</span>
                                    </td>

                                    <td className='p-4 border-r'>
                                        <span className='text-sm text-slate-800 dark:text-white'>{item.date}</span>
                                    </td>
                                    <td className='p-4 border-r'>
                                        <span className={`text-slate-400 dark:text-white font-medium text-xs px-3
                                        py-1 rounded-full ${getStatusColor(item.status)}`}>{item.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/**top products */}
            <div className='bg-white/80 dark:bg-slate-900-80 backdrop-blur-xl rounded-lg border 
            border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-bold text-slate-800 dark:text-white'>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Top Products
                            </h3>
                        </div>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            best performing products
                        </p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'
                    >View All</button>
                </div>

                {/** dynamic data */}
                {topProducts.map((item, index) => (
                    <div key={index} className='flex items-center justify-between p-3 rounded-lg hove:bg-slate-50 dark:hover:bg-slate800/50
                    transition-colors'>
                        <div className='flex-1'>
                            <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>{item.name}</h4>
                            <p className='text-xs text-slate-500 dark:text-slate-400'>${item.sales}</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-sm font-semibold text-slate-800 dark:text-white'>
                                {item.revenue}
                            </p>
                            <div className='flex items-center space-x-1'>
                                {item.trend === "up" ? <TrendingUp className='w-3 h-3 text-green-500' />
                                    : <TrendingDown className='w-3 h-3 text-red-500' />}
                                <span className={`text-xs font-medium ${item.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default TableSection
