import React from "react";
import '../css/Style.css';
import { AboutMe } from "./AboutMe";

export const Home = () => {
    return (
        <div>
            {/* Contenedor principal */}
            <div className="home-container">
                {/* Contenedor para el contenido */}
                <div className="home-content">
                    <h1>JOSÉ</h1>
                    <h2>DESARROLLADOR DE SOFTWARE</h2>
                    <h2>FULL STACK</h2>
                </div>
            </div>

            {/* Contenido educativo */}
            <div id="about-me-section">
                <AboutMe />
            </div>
        </div>
    );
};