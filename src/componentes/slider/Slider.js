import React from 'react'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css";
import slides from "./Slides";
import "./Slider.css";
const Slider = () => {
    return ( <div className = "carousel-container" >
        <div className = "carousel-title" >
        <h2 > Modelos </h2> 
        </div>

        < Carousel 
        arrows slidesPerPage = { 3 }
        infinite animationSpeed = { 200 }
        centered offset = { 50 }
        itemWidth = { 400 }
        slides = { slides }
        /> 
        </div>
    )
}
export default Slider;