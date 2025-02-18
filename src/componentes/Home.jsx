import React from "react"
import '../css/Style.css'

export const Home = () => {
    return (
        <div class='is-flex is-align-items-center is-justify-content-center'
            style={{ minHeight: "100vh", position: "relative" }} >
            {/* Contenedor para la imagen de fondo */}
            <div className="background-container "></div>
            {/* Contenedor para el contenido */}
            <div className="is-flex is-flex-direction-column is-align-items-center">
                <h1>JOSÉ</h1>
                <h2>DESARROLLO&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;SOFTWARE</h2>
                <p>FULL&nbsp;&nbsp;&nbsp;STACK</p>
            </div>
        </div>
    )
}