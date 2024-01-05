import React from 'react'
import { planes } from './Planes'

function Home() {
    return (
        <div className='bg-white w-[75%] flex justify-center items-center absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-lg'>
            <div className='flex justify-center items-center p-5 w-full h-full'>
                <div className='grid grid-cols-4 gap-5'>
                    {planes.map((plane) => {
                        return (
                            <div
                                key={plane.id}
                                className='pb-2 w-60 border-solid border-[1px] border-black flex justify-center items-center flex-col gap-2 rounded-lg h-[200px]'
                            >
                                <img
                                    className='w-full h-full rounded-b-none rounded-t-lg'
                                    src={plane.img}
                                    alt={plane.name} />
                                <h1>{plane.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
