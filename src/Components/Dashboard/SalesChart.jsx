import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    {
        name: "Electronics", value: 45, color: "#3b82f6"
    },
    {
        name: "Clothing", value: 30, color: "#8b5cf6"
    },
    {
        name: "Books", value: 15, color: "#10b981"
    },
    {
        name: "Other", value: 10, color: "#f59e8b"
    },
]


const SalesChart = () => {


    return (
        <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 border w-full
    border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>

        {/**top section */}
            <div>
                <h3 className='text-base sm:text-lg md:text-xl font-bold text-slate-800 dark:text-white'>Sales by Category</h3>
                <p className='text-xs sm:text-sm text-slate-500 dark:text-slate-400'>Production Distrbution</p>
            </div>

            {/**chart section */}
            <div className='h-48'>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                        data={data}
                        ex= "50%"
                        ey= "50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value" >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color}/>
                            ))}
                        </Pie>
                        <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(255, 255, 255, 0.95)",
                            border: "none",
                            borderRadius: "12px",
                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
                        }}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/**bottom section / chart details */}
            <div className='space-y-1 mt-2'>
                {data.map((item , index) => (
                    <div key={index} className='flex items-center justify-between'>
                        {/**left section / data name and data icon */}
                        <div className='flex items-center space-x-1 ml-3'>
                            <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                            <span className='text-xs sm:text-sm text-slate-600 dark:text-slate-400'>{item.name}</span>
                        </div>

                        {/**right section / data value */}
                        <div className='text-xs sm:text-sm font-semibold text-slate-800
                        dark:text-white mr-3'>{item.value}%</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SalesChart
