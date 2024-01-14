import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import testImage from "../../utils/images/test.jpg"

function PlaneDetails() {

    return (
        <div className='flex md:flex-row flex-col justify-start items-center md:p-[5rem] p-[1.5rem] '>
            <div className='md:w-[50%] w-[100%]'>
                <img
                    src={testImage}
                    alt='test'
                    className='w-[100%] md:h-[450px] h-[200px]'
                />
            </div>
            <div className='flex justify-center items-center flex-col md:w-[50%] w-[100%] md:px-[2em] md:py-[0em] py-[0.75em] gap-5'>
                <span className='text-xl'><b>Model: </b>Plane Name</span>
                <span className='text-xl'><b>Year: </b>1999</span>
                <span className='text-xl'><b>Country: </b>Croatia</span>
                <span className='text-xl'><b>Capacity: </b>200</span>
                <span className='text-xl'><b>Routes: </b>200</span>
                <span className='text-xl'><b>Crew: </b>200</span>
            </div>
        </div >
    )
}

export default PlaneDetails
