import React from 'react'
import { PaginationProps } from '../../interfaces/types';

const Pagination = ({ totalPlanes, planesPerPage, setCurrentPage, currentPage }: PaginationProps) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPlanes / planesPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, index) => {
                    return (
                        <button
                            className={page == currentPage ? 'bg-[#a6c1ee] m-2 w-[35px] h-[30px]' : 'bg-white m-2 w-[35px] h-[30px]'}
                            key={index}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
