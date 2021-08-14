import "./index.css"
import Links from '../Links/index'

import React from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
   
  

    return(
        <div className = "home">
            <h1>Welcome To GameHub</h1>
            <h2>The greatest page from search your favorites game info!!!</h2>
            <Links/>
         </div>
    )
}

export default Home;