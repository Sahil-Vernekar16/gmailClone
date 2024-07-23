import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BsFilterRight } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from 'react-icons/io5';
import { PiDotsNineBold } from 'react-icons/pi';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../store/authSlice.js';
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(setSearchText(searchQuery))
    }, [searchQuery])
    return (
        <div className='p-1 ml-3 flex items-center'>
            <RxHamburgerMenu size={"20px"} />
            <div className='flex items-center'>
                <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/Gmail-Dark-Mode.jpg" className='w-20 p-0 m-0' alt="" />
                <h2 className='font-normal text-xl '>Gmail</h2>
            </div >
            <div className='bg-[#474747] flex rounded-full w-[45%] ml-44 py-3 px-2 items-center gap-2'>
                <button><IoIosSearch size={"20px"} /></button>
                <input type="text" placeholder='Search Mail' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='bg-transparent w-full outline-none' />
                <button className='flex justify-end'><BsFilterRight size={"20px"} /></button>
            </div>
            <div>

            </div>
            <div className='flex items-center justify-end ml-72'>
                <div className='p-3 rounded-full hover:bg-gray-800 cursor-pointer'>
                <CiCircleQuestion size={"30px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-800 cursor-pointer'>
                <IoSettingsOutline size={"25px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-800 cursor-pointer'>
                <PiDotsNineBold size={"25px"} />
                </div>
                <div className='m-2'>
                <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" size="40" round={true} />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar