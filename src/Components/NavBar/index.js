import React from 'react'
import '../NavBar/index.css'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return(
    <nav>
       <h1>
       GAMEHUB
       </h1>
       <Link to ='/cardgames'>Card Games</Link>
    </nav>
    )

}

export default NavBar;


