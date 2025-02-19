import React from "react"
import '../css/Style.css'

export const AboutMe = () => {
    return (
        <div class='is-flex is-flex-direction-column is-align-items-center' style={{ minHeight: "100vh",}}>
            {/* Contenedor para la imagen de fondo */}
            <div className="background-container "></div>

            <h2 class='title is-2'> Estudios Superiores</h2>
            <div class="columns is-desktop  ml-3 mr-3" style={{ backgroundColor: 'rgba(27, 35, 63, 0.73)' }}>
                <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Tecnicatura en Desarrollo de Software</h6>
                    <h6 class="subtitle is-6">Universidad UPATECO</h6>
                    <h7 class="subtitle is-7">2022 - 2024 (finalizado)</h7>
                </div>
                <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Tecnicatura en Programacion</h6>
                    <h6 class="subtitle is-6">Universidad Nacional de Salta</h6>
                    <h7 class="subtitle is-7">2020 - 2022 ( - )</h7>
                </div>
                <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Tecnicatura Superior en Soporte y Mantenimiento Informatico</h6>
                    <h6 class="subtitle is-6">Terciario N° 6001 La Normal</h6>
                    <h7 class="subtitle is-7">2017 - 2019 (finalizado)</h7>
                </div>
            </div>

            <h2 class='title is-2'> Cursos</h2>
            <div class="columns is-desktop  ml-3 mr-3" style={{ backgroundColor: 'rgba(27, 35, 63, 0.73)' }}>
            <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Ciberseguridad</h6>
                    <h6 class="subtitle is-6">Universidad UPATECO</h6>
                    <h7 class="subtitle is-7">2024 (finalizado)</h7>
                </div>
                <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Introduccion a la Programacion</h6>
                    <h6 class="subtitle is-6">Argentina Programa</h6>
                    <h7 class="subtitle is-7">2023 (finalizado)</h7>
                </div>
                <div class="column" style={{ border: '1px solid white' }}>
                    <h6 class="title is-6">Introduccion a la programacion en JAVA</h6>
                    <h6 class="subtitle is-6">Universidad Nacional de Salta</h6>
                    <h7 class="subtitle is-7">2022 (finalizado)</h7>
                </div>
            </div>

        </div>
    )
}