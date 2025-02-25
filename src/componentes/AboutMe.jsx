import React from "react";
import '../css/Style.css';

// Componente reutilizable para bloques de estudios y cursos
const InfoBlock = ({ title, subtitle, duration }) => {
    return (
        <div className="info-block">
            <h6 className="title is-6">{title}</h6>
            <h6 className="subtitle is-6">{subtitle}</h6>
            <h7 className="subtitle is-7">{duration}</h7>
        </div>
    );
};

export const AboutMe = () => {
    // Datos para estudios superiores
    const estudiosSuperiores = [
        {
            title: "Tecnicatura en Desarrollo de Software",
            subtitle: "Universidad UPATECO",
            duration: "2022 - 2025 (finalizado)",
        },
        {
            title: "Tecnicatura en Programación",
            subtitle: "Universidad Nacional de Salta",
            duration: "2020 - 2022 (-)",
        },
        {
            title: "Tecnicatura Superior en Soporte y Mantenimiento Informático",
            subtitle: "Terciario N° 6001 La Normal",
            duration: "2017 - 2019 (finalizado)",
        },
    ];

    // Datos para cursos
    const cursos = [
        {
            title: "Ciberseguridad",
            subtitle: "Universidad UPATECO",
            duration: "2024 (finalizado)",
        },
        {
            title: "Introducción a la Programación",
            subtitle: "Argentina Programa",
            duration: "2023 (finalizado)",
        },
        {
            title: "Introducción a la programación en Java",
            subtitle: "Universidad Nacional de Salta",
            duration: "2022 (finalizado)",
        },
    ];

    return (
        <div className="about-me-container">
            <div class='imagen'></div>
            {/* Sección de estudios superiores */}
            <h2 className="section-title">ESTUDIOS SUPERIORES</h2>
            <div className="columns is-desktop ml-3 mr-3 mt-1">
                {estudiosSuperiores.map((estudio, index) => (
                    <div className="column mr-2" key={index}>
                        <InfoBlock
                            title={estudio.title}
                            subtitle={estudio.subtitle}
                            duration={estudio.duration}
                        />
                    </div>
                ))}
            </div>

            {/* Sección de cursos */}
            <h2 className="section-title">CURSOS</h2>
            <div className="columns is-desktop ml-3 mr-3 mt-1">
                {cursos.map((curso, index) => (
                    <div className="column mr-2" key={index}>
                        <InfoBlock
                            title={curso.title}
                            subtitle={curso.subtitle}
                            duration={curso.duration}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};