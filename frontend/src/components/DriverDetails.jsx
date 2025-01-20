import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";

const DriverDetails = () => {
  return (
    <>
    <div className='flex flex-col gap-7 p-7'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
                <img className='w-1/6 rounded-full' src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h3 className='font-semibold text-lg'>Aziz ahmed</h3>
            </div>
            <div>
                <h3 className='font-bold'>$295.60</h3>
                <p className='opacity-90'>Earned</p>
            </div>
        </div>
        <div className='flex justify-between items-center  p-2 rounded-md bg-[#eee]'>
            <div className='flex items-center flex-col gap-1'>
                <span><MdAccessTimeFilled /></span>
                <h5 className='font-semibold'>10.2</h5>
                <p>Hours Online</p>
            </div>
            <div className='flex items-center flex-col gap-1'>
                <span><MdAccessTimeFilled /></span>
                <h5 className='font-semibold'>10.2</h5>
                <p>Hours Online</p>
            </div>
            <div className='flex items-center flex-col gap-1'>
                <span><MdAccessTimeFilled /></span>
                <h5 className='font-semibold'>10.2</h5>
                <p>Hours Online</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default DriverDetails