import React from 'react'
import { IoPencilSharp } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='w-[15%] bg-gray-500 h-screen'>
        <button className='bg-white text-gray-700 rounded-xl p-4 flex items-center gap-2 ml-4'>
            <IoPencilSharp/>
            Compose
        </button>
    </div>
  )
}

export default Sidebar