import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>  <Link to='home'>Home</Link></li>
            <li> <Link to='archived'>Archived</Link></li>
            <li> <Link to='wheather'>Wheather</Link></li>
            {/* <li> <Link to='products'>products</Link></li> */}
        </ul>
  
   
   
  </nav>
  )
}

export default Navbar