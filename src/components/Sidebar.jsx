import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CiClock2 } from 'react-icons/ci'
import { FaRegStar } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { IoDocumentOutline, IoPencilSharp } from 'react-icons/io5'
import { MdInsertPhoto } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='w-[15%]  h-screen mt-2'>
        <button className='bg-white text-gray-700 rounded-2xl p-4 flex items-center gap-2 ml-4'>
            <IoPencilSharp/>
            Compose
        </button>
        <div className='mt-4 '>
        <button className='flex  gap-5 items-center rounded-r-full p-1 bg-[#595958] w-[90%]'>
            <div className='ml-5 flex gap-4 items-center'>
            <MdInsertPhoto size={"20px"}/>
            Inbox
            </div>
        </button>
        <button className='flex  gap-5 items-center  rounded-r-full p-1  w-[90%]'>
        <div className='ml-5 flex gap-4 items-center'>
            <FaRegStar size={"20px"}/>
            Starred
            </div>
        </button>
        <button className='flex  gap-5 items-center  rounded-r-full p-1  w-[90%]'>
        <div className='ml-5 flex gap-4 items-center'>
            <CiClock2 size={"20px"}/>
            Snoozed
            </div>
        </button>
        <button className='flex  gap-5 items-center  rounded-r-full p-1  w-[90%]'>
        <div className='ml-5 flex gap-4 items-center'>
            <AiOutlineSend size={"20px"}/>
            Sent
            </div>
        </button>
        <button className='flex  gap-5 items-center  rounded-r-full p-1  w-[90%]'>
        <div className='ml-5 flex gap-4 items-center'>
            <IoDocumentOutline size={"20px"}/>
            Drafts
            </div>
        </button>
        <button className='flex  gap-5 items-center  rounded-r-full p-1  w-[90%]'>
        <div className='ml-5 flex gap-4 items-center'>
            <IoIosArrowDown size={"20px"}/>
            More
            </div>
        </button>
        </div>
        
    </div>
  )
}

export default Sidebar