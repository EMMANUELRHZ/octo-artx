import React from 'react'
import "./Info.css"
 const Info = () => {
    return (
        <div className="info-container">
           <div className="info">
               <h1 className="h1">1. Abre la aplicación de RA desde el siguiente link.</h1>
               <a className="img" href="http://www.octoartx.com.mx/">http://www.octoartx.com.mx/</a>
               <hr>
               </hr>
               <h2 className="h1">2. Utiliza una imagen como marcador, en este caso la icónica imagen octocat.</h2>
               <div className="imgocto">
               <img src=".../media/octoimagenes/octocat.jpg"></img>
               </div>
               <hr></hr>
               <h3 className="h1">3. Presiona alguno de los botones que visualizas en la pantalla para interactuar con la aplicacion.</h3>
               <p className="pa">cada botón contiene una funcionalidad diferente, estas te proyectanun pequeño mensaje 
                con su funcionalidad.
               </p>
               <hr></hr>
               <h4 className="h1">4. Aleja o acerca la cámara de tu dispositivo para darle o quitarle zoom a los elementos de la aplicación.</h4>
               </div> 
        </div>
    )
}
export default Info;