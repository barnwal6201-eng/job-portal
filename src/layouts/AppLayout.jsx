import Header from '@/components/ui/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className='min-h-screen container mx-auto px-4 sm:px-6 lg:px-8'>
        <Header />
        <Outlet />
      </main>
      <div className='px-4 py-6 sm:p-10 text-center bg-gray-800 mt-10'>Made with ❤️ by Lalita</div>
    </div>
  )
}

export default AppLayout
