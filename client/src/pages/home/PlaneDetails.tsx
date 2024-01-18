import React, { useEffect, useState } from 'react'
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import testImage from "../../utils/images/test.jpg"
import { useParams } from 'react-router-dom'
import { getPlaneDetails } from '../../Redux/Actions/PlaneAction'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'

function PlaneDetails() {

    const params = useParams();
    const planeId = Number(params.id);

    const dispatch = useAppDispatch();
    const planeDetails = useAppSelector(state => state.planeDetails)

    const plane = planeDetails;

    useEffect(() => {
        dispatch(getPlaneDetails(planeId))
    }, [dispatch, planeId])

    return (
        <div className='flex md:flex-row flex-col justify-start items-center md:p-[5rem] p-[1.5rem] '>
            <div className='md:w-[50%] w-[100%]'>
                <img
                    src={testImage}
                    alt='test'
                    className='w-[100%] md:h-[450px] h-[200px]'
                />
            </div>
            <div className='flex justify-center items-center flex-col md:w-[50%] w-[100%] md:px-[2em] md:py-[0em] py-[0.75em] md:gap-5 gap-3'>
                {
                    plane && <>
                        {/* <span className='text-xl'><b>Model: </b>{plane?.model}</span> */}
                        <span className='text-xl'><b>Year: </b>1999</span>
                        <span className='text-xl'><b>Country: </b>Croatia</span>
                        <span className='text-xl'><b>Capacity: </b>200</span>
                        <span className='text-xl'><b>Routes: </b>200</span>
                        <span className='text-xl'><b>Crew: </b>200</span>
                    </>
                }
                <div className='flex justify-center items-center gap-10 text-xl'>
                    <div
                        // onClick={handleDelete}
                        className='flex justify-center items-center bg-[red] text-white w-10 h-8 rounded-lg p-1 cursor-pointer'>
                        <AiIcons.AiOutlineDelete />
                    </div>
                    <div
                        // onClick={handleUpdate}
                        className='text-[green] cursor-pointer'>
                        <FaIcons.FaPen />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlaneDetails
