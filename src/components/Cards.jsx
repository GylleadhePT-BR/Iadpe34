import React from 'react'
import { FaRegCalendarAlt ,FaBible ,FaFilm,FaCampground} from 'react-icons/fa'
import { BsBroadcastPin } from 'react-icons/bs'
import {TbHeartHandshake} from 'react-icons/tb'
import '../App.css'

const Cards = () => {
    return (
        
        <div className=''>
            <h1 className='sm:text-5xl text-3xl font-bold flex justify-center my-10 mx-10 text-sky-700'>Leia Mais</h1>
            <div className=' flex flex-row flex-wrap justify-center sm:gap-6 gap-3 items-center my-8  '>
                <div className='card text-sky-700 sm:w-40  hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-300 hover:text-white'>
                    <FaRegCalendarAlt className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Eventos</span>
                </div>

                <div className='card text-sky-700 sm:w-40  hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:text-white'>
                    <FaBible className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Evangelismo</span>
                </div>

                <div className='card text-sky-700 sm:w-40  hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:text-white'>
                    <FaCampground className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Acampadentro</span>
                </div>
                <div className='card text-sky-700 sm:w-40   hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:text-white'>
                    <FaFilm className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Bastidores</span>
                </div>
                <div className='card text-sky-700 sm:w-40 w-4/12 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:text-white'>
                    <BsBroadcastPin className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Lives</span>
                </div>
                <div className='card text-sky-700 sm:w-40  hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500 gap-5 flex flex-col justify-center text-center items-center sm:p-12 p-6 rounded-xl hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:text-white'>
                    <TbHeartHandshake className='sm:text-6xl text-4xl  text-center' />
                    <span className='text-center font-bold' >Caridades</span>
                </div>

                

                
            </div>
        </div>
    )
}

export default Cards