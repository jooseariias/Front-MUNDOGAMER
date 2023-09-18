import React from 'react'
import img from "../assets/error.png"
import {Link} from "react-router-dom"

export default function NotFound() {
  
  return (
    <div className='flex justify-center items-center flex-col'>
      <Link to={"/"}> <h1 className='font-primary text-white text-[80px]'>MUNDOGAMER</h1></Link> 
      <img className='mt-10' src={img}/>
    </div>
  )
}
