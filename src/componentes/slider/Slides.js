import React from 'react'
import "./Slider.css";

const slidesInfo = [{
        src: "../media/octoimagenes/1.jpg",
        alt: "octocat original",
        desc: ""
    },
    {
        src: "../media/octoimagenes/2.jpg",
        alt: "",
        desc: ""
    },
    {
        src: "../media/octoimagenes/3.jpg",
        alt: "octocat iron",
        desc: ""
    },
    {
        src: "../media/octoimagenes/4.jpg",
        alt: "",
        desc: ""
    }
]
const slides = slidesInfo.map(slide => { 
<div className = "slide-container">
        <img src = { slide.src }alt = { slide.alt }/> 
        <div className = "slide-desc" >
        <span > { slide.desc } </span>

    </div>

    </div>
})
export default slides;