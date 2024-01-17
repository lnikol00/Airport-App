import React, { useState } from 'react'
import logoImage from "../../utils/images/logo-image.png"
import { Link } from 'react-router-dom'
import * as Hi2Icons from "react-icons/hi2"
import * as Io5Icons from "react-icons/io5"

function Header() {

    const [open, setOpen] = useState<boolean>(true)

    const openNavbar = () => {
        setOpen(!open)
    }

    return (
        <div className='bg-white shadow-md'>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                <div>
                    <img className='w-16' src={logoImage} alt='...' />
                </div>
                <div className={
                    open
                        ? 'duration-500 md:static absolute z-10 bg-white md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 justify-center'
                        : 'duration-500 md:static absolute z-10 bg-white md:min-h-fit min-h-[30vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5 justify-center'
                }>
                    <ul className='flex md:flex-row flex-col md:items-center items-center md:gap-[2vw] gap-8'>
                        <li>
                            <Link className='hover:text-gray-500' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='hover:text-gray-500' to="create">Create New Plane</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center md:hidden'>
                    {
                        open ?
                            <span onClick={() => openNavbar()} className='text text-3xl cursor-pointer'><Hi2Icons.HiBars2 /></span>
                            :
                            <span onClick={() => openNavbar()} className='text text-3xl cursor-pointer'><Io5Icons.IoCloseOutline /></span>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header
