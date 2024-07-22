import React from 'react'
import { FaRegSquare, FaRegStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const navigate = useNavigate()
    const openMail = () => {
        navigate('/mail/1123456789')
    }
  return (
    <>
    <div onClick={openMail} className='flex items-center gap-3 ml-4 my-3 border-b-2 border-gray-700 pb-1 hover:cursor-pointer'>
        <FaRegSquare/>
        <FaRegStar/>
        <div className='font-semibold text-base'>
            Leena Vernekar
        </div>
        <div className='ml-[10%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
        <div className='text-gray-400 text-xs ml-[38%] font-bold'>
            19:07
        </div>
    </div>
    </>
  )
}

export default Message