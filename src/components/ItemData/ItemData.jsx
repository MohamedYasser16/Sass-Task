import React from 'react'
import { Link } from 'react-router-dom';

export default function ItemDisplay({ meal , img , search}) {

  // console.log("--------------------------------------");
  // console.log(meal , key , img );
  

  return (
    <>
    <div className='p-6 w-1-4 relative  my-9 x' >
    <div className='bg-white text-white m-auto py-6  rounded'>
        <div className="absolute top-20 m-auto imgContainer">
        <img src={img} className='w-2-3' alt="img meal " />
        </div>
        <div className='buttom'>
        <p className='f-25 text-black text-center p-5'>{meal}</p>
   <button className='p-5 my-4 bg-green text-white '> <Link  className='text-white border-0 ' to={`${search}/details/${meal}`} > more details</Link> </button>
  
        </div>
  </div>
    </div>
  
    
    </>
  )
}
