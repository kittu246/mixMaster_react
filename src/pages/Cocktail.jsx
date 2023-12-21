import axios from "axios";
import { useLoaderData,Link } from "react-router-dom";


let singlePageUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({params}) =>{

  const {id}  = params;

  const {data} =  await axios.get(`${singlePageUrl}${id}`)

  console.log(data);
  return {id,data};

}
const Cocktail = () => {

  const {id,data} = useLoaderData();

  const drinks =data.drinks[0];
  const {idDrink,strDrink,strCategory,strAlcoholic,strDrinkThumb,strInstructions
  }= drinks;
  console.log(drinks);

  const validIngredients = Object.keys(drinks).filter((key)=>{
    return (key.startsWith("strIngredient") && drinks[key] !=null )
  }
  ).map((value) =>drinks[value] );
  console.log(validIngredients);


    return (
      <section className="prodDetails">
        <header>
          <Link to='/' className="btn">Back Home</Link>
          <h1>{strDrink}</h1>
        </header>
        <main>
          <div className="detailsLeftSection">
            <img src={strDrinkThumb} alt={strDrink}/>
          </div>
          <div className="detailsRightSection">
            <p><span>Name :   </span>{strDrink}</p>
            <p><span>Category :   </span>{strCategory}</p>
            <p><span>Type :   </span>{strAlcoholic}</p>
            <p><span>Ingredients :   </span>{validIngredients.map((item,index) =>{
              return <span style={{color:"black", background:"transparent"}} key={index}>{item}{index <validIngredients.length-1 ?', ':' '}</span>
            } )}</p>
            <p><span>Instructions :   </span>{strInstructions}</p>
          </div>
        </main>
      </section>
    )
  }
  
  export default Cocktail