import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ItemData from '../ItemData/ItemData.jsx'

export default function Home() {


   let [arr, setArr] = useState([])




 

  let random =  async ()=>{

    try {
      // if ( arr.length == 14  ) { return null}
      let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`)
      console.log(data);
      setArr(data.meals);

     
      

    
    } catch (error) {
       console.log(error);
    }
  }


  useEffect( ()=>{

    random()

  } , [   ] )


  return (
    <>
   <div className='row p-6 justify-start my-7'>

    {console.log(arr)
    }
    {arr && arr.map( (meal)=> <ItemData key={meal.idMeal} meal={meal.strMeal} search={'Chicken/Chicken'} img={meal.strMealThumb} /> )}    

    </div>
    </>
  )
}
