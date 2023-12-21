import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { IoMenu,IoClose } from "react-icons/io5";


const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);

  function displayMenu (){
    setShowMenu(true);
  }
  function hideMenu (){
    setShowMenu(false);
  }
  return (
    <nav>
        <div className='leftNav'>
            <h1>MixMaster</h1>
        </div>
        <div className= {showMenu ?'mbRightNav':'rightNav'}>
            <NavLink className='navLink' to='/'> Home</NavLink>
            <NavLink className='navLink' to='/about'> About</NavLink>
            <NavLink className='navLink' to='/newsletter'> Newsletter</NavLink>
            <div onClick={hideMenu}  className='closeButton'>
            <IoClose />
            </div>
        </div>
        <div onClick={displayMenu} className="menuButton">
        <IoMenu />
        </div>
    </nav>
  )
}

export default Navbar