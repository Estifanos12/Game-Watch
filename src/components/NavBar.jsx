import React from 'react'
import {BiSearchAlt} from "react-icons/bi"

const NavBar = () => {
  return (
    <div className='nav-bar text-[#89CDA4] flex justify-between p-7 xl:pl-20 xl:pr-20'>
        <div className="logo">
            <h1 className='font-extrabold text-3xl xl:text-4xl'>Game Watch</h1>
        </div>

        <form className='search flex items-center gap-5 border border-[#89CDA4] p-2 rounded-md'>
            <BiSearchAlt size={25}  className=''/>
            <input type="text" name="" id="" placeholder='Search games' className='outline-none bg-transparent' />
        </form>

    </div>
  )
}

export default NavBar