import React from 'react';
import "./Footer.css";

 const Footer = () => {
    return ( <footer className = "footer" >
        <div className = "footer-preg1" >
        <h1 className="h"> ¿ porque no se me visualiza el objeto en pantalla? </h1> 
        < p className="p"> El objeto 3D de la aplicación está alojado en un servidor externo en la nube provocando cierto tiempo de retardo en la obtención y descarga del objeto, 
        es decir, puede haber latencia alta al momento de visualizar los objetos si su conexión es inestable. Verifique la conexión de su red, 
        si el objeto tarda mucho en cargar,vuelva a recargar la página u espere el momento en que su conexión sea más estable. </p> 
        </div>
        <div className = "footer-preg2" >
        <h1 className="h"> ¿La aplicación se quedo bloqueada en mi dispositivo? </h1> 
        < p className="p"> Esto puede suceder si su dispositivo no cuenta con los requerimientos mínimos para su uso. Vuelva a recargar la página para visualizar los objetos en 3D. En estos casos,
         se requiere consultar los requerimientos mínimos para el uso de la aplicación. </p> 
        </div>
        <div className = "footer-preg3" >
        <h1 className="h"> ¿Por qué la app se queda cargando? </h1> 
        < p className="p"> Esto se puede deber a la inestabilidad de su internet o a una falla/error en la obtención de la librería. Nuestra aplicación está hecha en base a librerías que están alojadas en repositorios de servidores externos a nosotros,
         que en algunas presentan fallas en la obtención de los recursos a causa del número de petición realizadas por día. 
        Si esta es la causa de su problema, intente acceder desde otro navegador u dispositivo móvil. </p> 
        </div>
        <div className = "footer-preg4" >
        <h1 className="h"> ¿Es seguro utilizar nuestra aplicación? </h1> 
        < p className="p"> Si es seguro, nuestro proveedor nos proporciona un certificado SSL que se actualiza cada hora del día que evita el filtrado u obtención de su información desde una red externa, por lo que puede confiar en la seguridad de la misma. </p> 
        </div>
       
        <div className = "footer-preg5" >
        <h1 className="h" > ¿Mi información se queda almacenada en la aplicación? </h1> 
        < p className="p"> La aplicación en ningún momento obtiene su información personal, esta únicamente pide permiso de acceso a su cámara para poder visualizar los objetos 3D en pantalla, en ningún momento se utiliza la misma para obtener información del usuario. 
        Para más información verifique los términos legales de uso.</p> 
        </div>

        </footer>
    )
}
export default Footer;