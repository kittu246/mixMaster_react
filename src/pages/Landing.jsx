import axios from "axios"
import { useLoaderData } from "react-router-dom"
import CockTailList from "../components/CockTailList";
import SearchForm from "../components/SearchForm";

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);
//   const searchTerm = url.searchParams.get('search') || '';
export const loader = async ({request}) =>{

  console.log(request);

  const url = new URL(request.url)

      const searchTerm = url.searchParams.get('search') || '';
      const response = await axios.get(`${cocktailUrl}${searchTerm}`);
        return {drinks :response.data.drinks, searchTerm}
        
  
    
}
const Landing = () => {

  // USE EFFECT APPROACH

  // const fetchData = async () =>{
  //   try{
  //     const response = await axios.get('/url');
  //     console.log(response)
      
  //   }
  //   catch (err){
  //       console.log(err);

  //   }

    
  // }

  // useEffect( ()=>{
  //   fetchData()
  // },[])


  //LOADER APPROACH



  const {drinks,searchTerm} = useLoaderData();
  console.log(drinks);

  

 

    return (
      <section className='landingPage'>
      
      <SearchForm searchTerm={searchTerm}/>
      <CockTailList drinks={drinks}/>
      </section>
    )
  }
  
  export default Landing