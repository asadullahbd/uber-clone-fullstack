import React from 'react'
import uberLogoWhite from '../assets/image/uber-logo-white.png'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <>
        <div className='bg-[url("https://www.miniphysics.com/wp-content/uploads/2011/05/file-AYQMIHQeCrps7zXtPZbUT8Iv.webp")] bg-cover bg-center h-screen flex  items-center justify-between flex-col'>
            <div>
                <img className='w-1/4 mt-8 ml-4' src={uberLogoWhite} alt="" />
            </div>
            <div className='bg-white w-full p-5'>
                <h2 className='capitalize text-3xl font-semibold'>Get Started with uber</h2>
                <Link className='block text-center capitalize bg-black rounded text-white w-full py-3 px-4 mt-8' to={'/passenger-login'}>Continue</Link>
            </div>
        </div>
    </>
  )
}

export default StartPage