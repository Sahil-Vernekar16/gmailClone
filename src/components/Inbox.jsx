import React,{useState} from 'react'
import { FaRegImage, FaRegSquare } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowDropleft, IoMdRefresh } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlinePeople } from 'react-icons/md'
import { TbBookmarkEdit } from 'react-icons/tb'
import Messages from './Messages'
const Inbox = () => {
    const [mailTypeSelected, setMailTypeSelected] = useState(1)
    const changeMailType = (index) => {
        setMailTypeSelected(index)
    }
    return (
        <>
            <div className='bg-[#2d2c2d] w-4/5 h-screen rounded-3xl'>
                <div className='flex gap-4 p-4 justify-between' >
                    <div className='flex gap-1'>
                    <div className='flex gap-2'>
                        <FaRegSquare className='text-gray-400' />
                        <IoIosArrowDown className='text-gray-400' />
                    </div>
                    <div className='flex gap-4 pl-2'>
                        <IoMdRefresh className='text-gray-400' />
                        <HiDotsVertical className='text-gray-400' />
                    </div>
                    </div>
                    <div className=' flex items-center gap-3'>
                        <div className='text-sm text-gray-500'>1-50 of 1000</div>
                        <button><MdKeyboardArrowLeft/></button>
                        <button><MdKeyboardArrowRight/></button>
                    </div>
                </div>
                <div className='flex ml-3 gap-4 pl-2 mt-3' >
                <button onClick={()=>changeMailType(1)} className={`${mailTypeSelected === 1 ? 'border-b-4 border-blue-400' : 'border-b-4 border-gray-400'} flex items-center gap-4 pr-16 hover:bg-slate-500 px-3 pb-3`}><FaRegImage/> Primary</button>
                <button onClick={()=>changeMailType(2)} className={`${mailTypeSelected === 2 ? 'border-b-4 border-blue-400' : 'border-b-4 border-gray-400'} flex items-center gap-4 pr-16 hover:bg-slate-500 px-3 pb-3`}><TbBookmarkEdit/> Promotions</button>
                <button onClick={()=>changeMailType(3)} className={`${mailTypeSelected === 3 ? 'border-b-4 border-blue-400' : 'border-b-4 border-gray-400'} flex items-center gap-4 pr-20 hover:bg-slate-500 px-3 pb-3`}><MdOutlinePeople/> Social</button>
            </div>
            <Messages/>
            </div>
           
        </>
    )
}

export default Inbox