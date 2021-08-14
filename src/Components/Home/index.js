import "./index.css"
import Cards from "../Cards/index"
import FirstCarousel from "../Carousel/index"


import React from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
   
    return(
        <div className = "home">
            <h1>Welcome To GameHub</h1>
            <h2>The greatest page from search your favorites game info!!!</h2>
      </div>
    )
}

export default Home;