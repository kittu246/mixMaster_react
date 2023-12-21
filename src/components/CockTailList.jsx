import React from 'react';
import CockTailCard from './CockTailCard';

const CockTailList = ({drinks}) => {
if(!drinks){

    return (
        <div>No matching drinks found !!</div>
      )
}

return (
  <div className='cardHolder'>

{drinks.map((drink) =>{
//    const {idDrink,strDrink,strCategory,strAlcoholic,strDrinkThumb}= drink;
 
   return (
    
<CockTailCard drink = {drink}/>

  )

})}

  </div>
)

  
}

export default CockTailList