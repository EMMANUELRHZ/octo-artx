import React from 'react';
import "./About.css";

const About = () => {
    return ( 
    <div className = "about-container">
        <div className = "about-desc" >
        <h3 > Info sobre mi </h3> 
        <p > Octocat es un proyecto de RA que se desarrolla apartir del modelado de una de las herramientas mas solicitadas por estudiantes de ingenieria gitHub, este modelo es inspirado por la iconica mascota de git </p> 
        </div> 
        <div>
        <img src = "../media/octoimagenes/octofon.jpg"alt = "Octocat" />
        </div> 
        </div>
    )
}
export default About;