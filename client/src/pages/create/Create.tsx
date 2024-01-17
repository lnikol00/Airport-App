import React from 'react'

function Create() {
    return (
        <div className='flex flex-col justify-center items-center md:pt-5 pt-3'>
            <h2 className='md:text-3xl text-xl md:pb-5 pb-2'>Add new plane</h2>
            <form className='flex flex-col justify-center items-center md:gap-[20px] gap-[15px]'>
                <label className='relative' id='model'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Model</span>
                </label>
                <label className='relative' id='image'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Image</span>
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
                <label className='relative' id='type'>
                    <select
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none transition duration-200'
                    >
                        <option></option>
                        <option value="Cargo">Cargo</option>
                        <option value="Passenger">Passenger</option>
                        <option value="Private">Private</option>
                    </select>
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Type</span>
                </label>
                <label className='relative' id='captain'>
                    <input
                        type='text'
                        required
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Captain</span>
                </label>

                <button className='bg-white w-[150px] h-[45px] uppercase rounded-lg outline-none'>Add</button>
            </form>
        </div>
    )
}

export default Create
