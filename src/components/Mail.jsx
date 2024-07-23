import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegTrashCan } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'
import { IoIosMailUnread } from 'react-icons/io'
import { IoAlertCircleOutline, IoArrowBack } from 'react-icons/io5'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdDriveFolderUpload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase'
import { motion } from 'framer-motion'

const Mail = () => {
  // console.log(params);
  const email = useSelector(store => store.authSlice.selectedEmail)
  const navigate = useNavigate()
  const params = useParams()
  const deleteMail = async (id) => {
    try {
      const response = await deleteDoc(doc(db, "emails", id));
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  } 
  return (
    <motion.div 
      className='bg-white w-4/5 h-screen text-black rounded-3xl'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className='bg-[#2d2c2d] rounded-t-2xl justify-between flex text-slate-200'
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='p-4 flex gap-6'>
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => navigate('/')}>
            <IoArrowBack size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <FiDownload size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <IoAlertCircleOutline size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => deleteMail(params.id)}>
            <FaRegTrashCan size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <IoIosMailUnread size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <MdDriveFolderUpload size={"20px"} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <BsThreeDotsVertical size={"20px"} />
          </motion.button>
        </div>
        <div className='items-center p-4 gap-4'>
          1 of 1000
          <motion.button whileHover={{ scale: 1.1 }}>
            <MdKeyboardArrowLeft />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <MdKeyboardArrowRight />
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className='bg-white p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex gap-4'>
          <h1 className='font-semibold text-lg'>{email.subject}</h1>
          <div className='text-light bg-gray-300 p-1 text-gray-600'>Inbox</div>
        </div>
        <p>{email.to}</p>
        <span>to me</span>
        <h2>{email.message}</h2>
      </motion.div>
    </motion.div>
  );
}

export default Mail