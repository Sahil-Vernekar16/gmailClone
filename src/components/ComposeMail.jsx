import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../store/authSlice.js'

const ComposeMail = () => {
    const [formData,setFormData] = useState({
        to: '',
        subject: '',
        message: ''
    })
    const open = useSelector(store=>store.authSlice.open)
    const dispatch = useDispatch()
    const onChangeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData);
    }
  return (
    <div className={`${open ? 'block' : 'hidden'}`}>

    <div className='p-2 bg-gray-500 flex justify-between rounded-t-xl'>
        New Message
        <button onClick={()=> dispatch(setOpen(false))}><IoCloseSharp/></button>
    </div>
    <form onSubmit={onSubmitHandler} className='flex flex-col'>
        <input onChange={onChangeHandler} name="to" value={formData.to} type="text" placeholder='To' className='w-full px-3 border-b-2 border-b-gray-300 text-black'/>
        <input onChange={onChangeHandler} name="subject" value={formData.subject} type="text" placeholder='Subject' className='w-full px-3 border-b-2 border-b-gray-300 text-black'/>
        <textarea onChange={onChangeHandler}  value={formData.message} name="message" rows={"10"} cols={"30"} className='text-black'></textarea>
        <button type='submit' onClick={() => dispatch(setOpen(false))} className='bg-blue-700 '>Submit</button>
    </form>

    </div>
  )
}

export default ComposeMail