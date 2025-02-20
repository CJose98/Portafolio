import React from "react"
import '../css/Style.css'
import { AboutMe } from "./AboutMe"

export const Home = () => {
    return (
        <div>
            {/* Contenedor principal */}
            <div class='is-flex is-flex-direction-column is-align-items-center is-justify-content-center m-2'
                style={{background: 'radial-gradient(burlywood, black)', minHeight: "100vh", position: "relative", 'border-radius': 10, border: '1px solid white' }} >

                {/* Contenedor para la imagen de fondo */}
                <div className="background-container "></div>

                {/* Contenedor para el contenido */}
                <div className="is-flex is-flex-direction-column is-align-items-center">
                    <h1>JOSÉ</h1>
                    <h2>DESARROLLADOR&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;SOFTWARE</h2>
                    <p>FULL&nbsp;&nbsp;&nbsp;STACK</p>
                </div>
            </div>
        
            {/* Contenido educativo */}
            <div id="about-me-section">
                <AboutMe />
            </div>
            
        </div>

    )
}