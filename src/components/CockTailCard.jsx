import React from 'react';
import { Link } from 'react-router-dom';

const CockTailCard = ({drink}) => {
    const {idDrink,strDrink,strCategory,strAlcoholic,strDrinkThumb}= drink;  
  return (
    <div className='drinkCard'>
        <img src={strDrinkThumb} alt='Drinks'/>
        <div className='cardInfo'>
        <h2>{strDrink}</h2>
        <h5>{strCategory}</h5>
        <p>{strAlcoholic}</p>
        <Link className='btn' to={`/cocktail/${idDrink}`}>Details </Link>
        </div>
    </div>
  )
}

export default CockTailCard