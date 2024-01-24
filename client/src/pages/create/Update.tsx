import React, { useEffect, useState } from 'react'
import Toast from '../../utils/messages/Toast'
import { toast } from "react-toastify"
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { updateProduct } from '../../Redux/Actions/PlaneAction'

function Update() {

    const [model, setModel] = useState<string>("")
    const [year, setYear] = useState<number>(0)
    const [image, setImage] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [capacity, setCapacity] = useState<number>(0)
    const [captain, setCaptain] = useState<string>("")

    const navigate = useNavigate()
    const params = useParams()
    const planeId = Number(params.id);

    const dispatch = useAppDispatch();

    const planeUpdate = useAppSelector((state) => (state.planeUpdate));
    const { error, loading, plane } = planeUpdate;

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        if (plane !== null && (plane?.id !== planeId)) {
            dispatch(updateProduct(planeId))
        }
        else {
            setModel(`${plane?.model}`);
            setImage(`${plane?.image}`);
            setYear(Number(plane?.year));
            setCountry(`${plane?.country}`);
            setType(`${plane?.type}`)
            setCapacity(Number(plane?.capacity));
            setCaptain(`${plane?.captain}`)
        }

    }, [plane, dispatch, planeId])

    return (
        <div className='flex flex-col justify-center items-center md:pt-5 pt-3'>
            <Toast />
            <h2 className='md:text-3xl text-xl md:pb-5 pb-2'>Update plane</h2>
            <form
                className='flex flex-col justify-center items-center md:gap-[20px] gap-[15px]'
            >
                <label className='relative' id='model'>
                    <input
                        type='text'
                        required
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Model</span>
                </label>
                <label className='relative' id='image'>
                    <input
                        type='text'
                        required
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Image</span>
                </label>
                <label className='relative' id='year'>
                    <input
                        type='text'
                        required
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Year</span>
                </label>
                <label className='relative' id='country'>
                    <input
                        type='text'
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Country</span>
                </label>
                <label className='relative' id='capacity'>
                    <input
                        type='text'
                        required
                        value={capacity}
                        onChange={(e) => setCapacity(Number(e.target.value))}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Capacity</span>
                </label>
                <label className='relative' id='type'>
                    <select
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none transition duration-200'
                    >
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
                        value={captain}
                        onChange={(e) => setCaptain(e.target.value)}
                        className='h-[45px] md:w-[450px] w-80 px-4 text-md bg-inherit border-2 border-opacity-50 border-black rounded-lg outline-none focus:border-white focus:text-white transition duration-200'
                    />
                    <span className='text-md text-black absolute left-0 top-[10px] mx-6 px-2 transition duration-200 input-text'>Captain</span>
                </label>
                <button className='bg-white w-[150px] h-[45px] uppercase rounded-lg outline-none'>Update</button>
            </form>
        </div>
    )
}

export default Update