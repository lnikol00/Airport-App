import React from 'react'
import { ErrorProps } from '../../interfaces/types'

function Error({ children }: ErrorProps) {
    return (
        <div className='bg-[lightpink] text-[red] my-[15px] py-[20px] px-[40px] border-[1px] border-solid border-[red] rounded-lg'>
            {children}
        </div>
    )
}

export default Error
