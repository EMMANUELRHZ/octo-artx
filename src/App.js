import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./componentes/cover/Cover";
import Navbar from "./componentes/navbar/Navbar";
import About from "./componentes/about/About";
//import Slider from "./componentes/slider/Slider";
import Footer from "./componentes/footer/Footer";
import Info from "./componentes/info/Info";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scrol", handleScroll)
    }, [scrollHeight])
    return ( <div className = "App">
        <Navbar isScrolling = { scrollHeight }/>  
        <Cover />
        <About />
      
        <Footer />
        <Info />
        </div>);
    }

    export default App
