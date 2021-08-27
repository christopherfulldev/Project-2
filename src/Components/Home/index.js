import "./index.css"
import Links from '../Links/index'
import Footer from '../Footer/index'

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstCarousel from "../Carousel/index";


const Home = (props) => {
    return(
        <div className = "home">
            <h1 className="elegantext">Welcome To GameHub!</h1>
            <h2 className="elegantext2">The greatest page for search your favorites game info!!!</h2>
            <FirstCarousel gameList={props} className="carouselcontainer"/>
            <Links/>
         </div>
    )
}

export default Home;