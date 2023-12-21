import img from '../assets/not-found.svg';
import { Link ,useRouteError} from 'react-router-dom';
const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  if(error.status=== 404){
    return (
      <div className='errorInfo'>
        <img src={img} alt='not found image' />
        <p>Ohh!</p>
        <p >We can't seem to find the page you are looking for !!</p>
        <Link to='/' className='backHome'>Back Home</Link>

      </div>
    )

  }
  else{
    return (
      <div className='errorInfo'>Something went wrong!!</div>
    )
  }
    
  }
  
  export default Error