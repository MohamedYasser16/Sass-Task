import React from 'react'
import logo from '../../assets/logo sass task1.png'



export default function LeftNav() {
  return (
   <>
   <img src={logo} className='w-1-1' alt="logo" />

<div className='col-center'>
<button className='w-2-3  py-4 bg-yellow border-0 radius-pill my-5 text-white  fw-8 playfair f-28' ><i className="fa-solid fa-utensils mx-8 " style={{color: '#ffffff'}} /> meal </button>
  <button className='w-2-3   py-4 bg-red border-0 radius-pill my-5 text-white  fw-8 playfair f-28' ><i className="fa-solid fa-utensils mx-8 " style={{color: '#ffffff'}} /> ingredient </button>
  <button className='w-2-3   py-4 bg-red border-0 radius-pill my-5 text-white  fw-8 playfair f-28 ' ><i className="fa-solid fa-utensils mx-8 " style={{color: '#ffffff'}} /> area </button>
</div>

   </>
  )
}
