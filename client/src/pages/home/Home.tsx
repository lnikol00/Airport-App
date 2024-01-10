import { useEffect, useState } from 'react'
import { PlanesType } from '../../interfaces/types'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

function Home() {

    const [planes, setPlanes] = useState<PlanesType>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [planesPerPage, setPlanesPerPage] = useState<number>(5);

    const lastPlaneIndex = currentPage * planesPerPage;
    const firstPlaneIndex = lastPlaneIndex - planesPerPage;

    useEffect(() => {
        fetch("http://localhost:8000/planes/")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setPlanes(json)
            })
    }, [])

    return (
        <div className='flex flex-col justify-start md:my-[2rem] my-[1.5rem] md:mx-[10rem] mx-[3rem]'>
            <span className='md:text-2xl text-xl'>Currently available planes:</span>
            {/* <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `${styles.offscreen}`} aria-live="assertive">
                {errMsg}
            </p> */}
            {planes.slice(firstPlaneIndex, lastPlaneIndex).map((plane) => {
                return (
                    <Link to={`/planes/${plane.id}`}>
                        <div
                            key={plane.id}
                            className='flex flex-start justify-start flex-col bg-white py-[10px] px-[16px] md:my-[10px] my-[8px] border-[1px] border-black border-solid shadow-md cursor-pointer'
                        >
                            <div>
                                <h1>{plane.name}</h1>
                                <span>Country of origin: {plane.country}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
            <Pagination
                totalPlanes={planes.length}
                planesPerPage={planesPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home
