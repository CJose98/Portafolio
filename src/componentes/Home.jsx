import React from "react";
import '../css/Style.css';
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const Home = () => {
    return (
        <div>
            {/* Contenedor principal */}
            <div className="home-container">

                {/*iconos*/}
                <figure class="iconos-link">
                    <img id='ic1' src="/linkedin_o.png" />
                    <img id='ic1' src="/github_o.png" />
                </figure>

                <div class='imagen'></div>
                {/* Contenedor para el contenido */}
                <div className="home-content">
                    <h2>Hola, soy José 👋</h2>
                    <h1>Full Stack</h1>
                    <h2>Developer</h2>
                </div>
            </div>
            {/* Contenido educativo */}
            <div id="about-me-section">
                <AboutMe />
            </div>
            {/* Skills  */}
            <div id="about-me-section">
                <Skills />
            </div>
            {/* Projects  */}
            <div id="about-me-section">
                <Projects />
            </div>
        </div>
    );
};