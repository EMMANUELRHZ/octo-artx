import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
 const Cover = () => {
    return ( < div className = "cover-container" >
        <video className = "video" src = { coverVideo }autoPlay loop muted />
        <h1> Bienvenidos a la Guia de la Realidad Aumentada de Octocat </h1>  
        <p> Desarrollo | RA | Modelos 3 D </p> 
        </div>
    )
}
export default Cover;

