import React, { useEffect, useState } from 'react'
import Papular from '../components/popluar'
import Veggies from '../components/veggies'


export default function HomePage() {

  let [popular,setPopular]=useState([]);

    let apiCall = async()=>
    {
      //https://api.spoonacular.com/recipes/random?apiKey=7ff18565ff214ebdbc055b90142c8545&&number=9
      console.log(process.env.REACT_APP_API_KEY);
        let endUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&&number=9`
        console.log("End Url",endUrl);
        let makeApiCall =  await fetch(endUrl);
        let data = await makeApiCall.json();
        setPopular(data.recipes);

        
    }
 useEffect(()=>{
    apiCall();

    },[])
  return (
    <div>{popular.length}<Papular></Papular>
    <Veggies></Veggies>
    </div>

  )
}
