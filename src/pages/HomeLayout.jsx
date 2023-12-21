// import { Link } from 'react-router-dom';
import { Outlet,useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
const HomeLayout = () => {

  
  const navigation = useNavigation();
  console.log(navigation);
    return (
      <div>
        <Navbar/>
        <br/>
        {/* <Link to='/about'>About</Link> */}
        <section className='pageLayout'>
          {navigation.state === 'loading'? <div id='loader'/> : <Outlet/>}
       
        </section>
        
      </div>
    )
  }
  
  export default HomeLayout