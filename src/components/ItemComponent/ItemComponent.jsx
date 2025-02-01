import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemComponent() {
  let {meal} = useParams()
  console.log(meal);
   let arrComp = []
  let [obj , setObj ] = useState({})
  let { strArea , strCategory , strInstructions , strMeal, strYoutube  , strMealThumb} = obj

  if ( obj ) {
    for (let index = 1; index < 21 ; index++) {
           arrComp.push( obj[`strIngredient${index}`] ) 
             console.log(arrComp); 
    }
  }


  async function getFun () {
    try {
      
    let {data} = await axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    console.log(data);
    console.log(data.meals );
    setObj(data.meals[0]);
    console.log(data.meals[0]);
    console.log(obj )
    } catch (error) {
      console.log(error);  
    }
  }
  
  useEffect(  ()=>{
    getFun ()
   
  } , []  )

  return (
    <>
    { obj &&

    <div className='row space-evenly my-10 align-item-center'>
    <div className='w-1-3 p-4 py-10'>
    <img className='w-1-1' src={strMealThumb} alt="" />
    
     <div className='py-10 flex justify-between'>
     <a href={strYoutube}  className='bg-red text-white my-8 f-22 m-auto Caveat-font' > see in Youtube </a>
     </div>
   
    </div>
  
     <div className='w-66  mx-2'>
    <h1 className='text-green my-4 Caveat-font'> Name : {strMeal} </h1>
    <p className='text-red my-2 f-34 Caveat-font'> Category : {strCategory} </p>
   
    <h2 className='text-yellow me-10 Caveat-font f-28'>Component : </h2>
    
    <span className='row'> 
    
      {arrComp.map(  (item)=>  <span className='text-yellow me-10 Caveat-font f-28'>{item}</span> ) }
    </span>
    <p>
      {strInstructions}
    </p>
    </div>  
    </div>

   }
   


    </>
  )
}
