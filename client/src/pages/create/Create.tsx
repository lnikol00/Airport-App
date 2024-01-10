import React from 'react'

function Create() {
    return (
        <div className='flex flex-col justify-center items-center pt-5'>
            <h2 className='text-3xl pb-5'>Add new plane</h2>
            <form className='flex flex-col justify-center items-center gap-[20px]'>
                <label className='relative' id='model'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Model</span>
                </label>
                <label className='relative' id='year'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Year</span>
                </label>
                <label className='relative' id='country'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Country</span>
                </label>
                <label className='relative' id='capacity'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Capacity</span>
                </label>
                <label className='relative' id='routes'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Routes</span>
                </label>
                <label className='relative' id='crew'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Crew</span>
                </label>
                <button className='bg-white w-[150px] h-[45px] uppercase rounded-lg outline-none'>Add</button>
            </form>
        </div>
    )
}

export default Create
