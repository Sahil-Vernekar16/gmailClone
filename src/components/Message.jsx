import React from 'react'
import { FaRegSquare, FaRegStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedEmail } from '../store/authSlice'
import { motion } from 'framer-motion'
const Message = ({email}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(setSelectedEmail(email))
        navigate(`/mail/${email?.id}`)
    }
    return (
        <>
          <motion.div 
            onClick={openMail} 
            className='flex items-center gap-3 ml-4 my-3 border-b-2 mr-2 justify-between border-gray-700 pb-1 hover:cursor-pointer'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className='flex gap-2'>
              <FaRegSquare />
              <FaRegStar />
            </div>
    
            <div className='font-semibold text-base p-0'>
              {email?.subject}
            </div>
            <div className=' p-0'>
              {email.message}
            </div>
            <div className='text-gray-400 text-xs ml-[35%] font-semibold'>
              {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
            </div>
          </motion.div>
        </>
      );
}

export default Message