import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemData from '../ItemData/ItemData.jsx';

export default function ItemSearch() {

  let [arrMeal , setMeal] = useState( [ ] )
  let {search} = useParams()
  // console.log(search);
  
  let getData = async ()=>{
try {
  let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
  console.log('data' , data );
  
console.log('data.meals', data.meals);
  setMeal(data.meals);
//  let {meals} = data
// setMeal(meals)
 console.log('arr meal' , arrMeal);

console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`);

} catch (error) {
  console.log(error);
  
}
  }


  useEffect( ()=>{
    getData()
    console.log('inner the effect');
    
  console.log( 'arrMeal' , arrMeal);
  // meal.map( (mealItem)=>{ console.log(mealItem.idMeal)
    
  } , [search] )


  return (
    <>
    <div>

    {/* {
      console.log(arrMeal)
    }
    {
      console.log(Array.isArray(arrMeal))
    } */}

    <div className='row p-6 justify-start my-7 p-10'>
    {!arrMeal ? <h1>null value</h1> : arrMeal.map( (meal)=> <ItemData key={meal.idMeal} search={search} meal={meal.strMeal}  img={meal.strMealThumb} />     )    }


    </div>
    
 
    
    </div>
   
    
    
    </>
  )
}  
