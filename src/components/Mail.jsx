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
    <div className='bg-white w-4/5 h-screen text-black rounded-3xl'>
      <div className='bg-[#2d2c2d] rounded-t-2xl justify-between flex text-slate-200'>
        <div className='p-4 flex gap-6'>
          <button onClick={()=>navigate('/')}><IoArrowBack size={"20px"} /></button>
          <button><FiDownload size={"20px"} /></button>
          <button><IoAlertCircleOutline size={"20px"} /></button>
          <button onClick={()=> deleteMail(params.id)}><FaRegTrashCan size={"20px"} /></button>
          <button><IoIosMailUnread size={"20px"} /></button>
          <button><MdDriveFolderUpload size={"20px"} /></button>
          <button><BsThreeDotsVertical size={"20px"} /></button>
        </div>
        <div className='items-center p-4 gap-4'>
          1 of 1000
          <button><MdKeyboardArrowLeft /></button>
          <button><MdKeyboardArrowRight /></button>
        </div>
      </div>

      <div className='bg-white p-4 '>
        <div className='flex gap-4'>
        <h1 className='font-semibold text-lg ' >{email.subject}</h1>
        <div className='text-light bg-gray-300 p-1 text-gray-600'>Inbox</div>
        </div>
        <p>{email.to}</p>
        <span>to me</span> 

        <h2>{email.message}</h2>
      </div>

    </div>
  )
}

export default Mail