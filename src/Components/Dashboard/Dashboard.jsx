import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import TableSection from './TableSection'
import ActivityFeed from './ActivityFeed'

const Dashboard = () => {
  return (
    <div className='space-y-4'>
      {/**Stats Grid */}
      <StatsGrid />
      {/** chart section */}
      <ChartSection />

      <div className='grid grod-cols-1 xl:grid-cols-3 gap-5'>
        <div className='xl:col-span-2'>
          <TableSection /> 
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
