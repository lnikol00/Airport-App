import { useEffect, useState } from 'react'
import { Plane, PlaneList } from '../../interfaces/types'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getAllPlanes } from '../../Redux/Actions/PlaneAction';

function Home() {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [planesPerPage, setPlanesPerPage] = useState<number>(5);

    const lastPlaneIndex = currentPage * planesPerPage;
    const firstPlaneIndex = lastPlaneIndex - planesPerPage;

    const dispatch = useAppDispatch()
    const planeList = useAppSelector(state => state.planeList)

    const { planes } = planeList;

    useEffect(() => {
        dispatch(getAllPlanes());
    }, [dispatch])

    return (
        <div className='flex flex-col justify-start md:my-[2rem] my-[1.5rem] md:mx-[10rem] mx-[3rem]'>
            <span className='md:text-2xl text-xl'>Currently available planes:</span>
            {planes?.slice(firstPlaneIndex, lastPlaneIndex).map((plane: Plane) => {
                return (
                    <Link to={`/planes/${plane.id}`}>
                        <div
                            key={plane.id}
                            className='flex flex-start justify-start flex-col bg-white py-[10px] px-[16px] md:my-[10px] my-[8px] border-[1px] border-black border-solid shadow-md cursor-pointer'
                        >
                            <div>
                                <h1>{plane.model}</h1>
                                <span>Country of origin: {plane.country}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}

            <Pagination
                totalPlanes={planes ? planes?.length : 0}
                planesPerPage={planesPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home
