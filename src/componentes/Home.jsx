import React from "react"
import '../css/Style.css'
export const Home = () => {
    return (
        <div class='is-flex is-align-items-center is-justify-content-center' style={{ minHeight: "100vh", position: "relative" }}>
            {/* Contenedor para la imagen de fondo */}
            <div className="background-container"></div>
            {/* Contenedor para el contenido */}
            <div className="is-flex is-flex-direction-column is-align-items-center">
                <h1 class="title custom-font">JOSÉ COLQUE</h1>
                <h2 class="title custom-subtitle">TECNICO&nbsp;&nbsp;&nbsp;EN&nbsp;&nbsp;&nbsp;DESARROLLO&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;SOFTWARE,&nbsp;&nbsp;&nbsp;FULL&nbsp;&nbsp;&nbsp;STACK</h2>
                <h2 class="title custom-subtitle">Desarrollador Junior</h2>
            </div>
        </div>
    )
}