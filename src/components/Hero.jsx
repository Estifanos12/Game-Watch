import axios from 'axios'
import {React,useEffect,useState} from 'react'
import {requests} from "../Requests/requests"

const Hero = ({name,rating,release}) => {
return(
    <div className="absolute top-[40vh] left-[10%]">
       <h1 className='text-[#ffffff] font-extrabold text-[2rem] xl:text-[4rem]'>{name}</h1>
       <p className='text-[#ffffff] font-bold'>Rating: {rating}</p>
       <p className='text-[#ffffff] font-bold'>Release date: {release}</p>
    </div>
)
}

export default Hero