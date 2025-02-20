import { Animacion } from "../css/bits-and-bytes-css-animation/Animacion";

export const Menu = () => {
    return (
        <div className="menu-container">
            <div>
                <Animacion />
            </div>
            <div className="menu-content">
                <aside className="menu">
                    <p className="menu-label">PRINCIPAL</p>
                    <p className="menu-label">EDUCACION</p>
                    <p className="menu-label">SKILL</p>
                    <p className="menu-label">PROYECTOS</p>
                    <p className="menu-label">CONTACTO</p>
                </aside>
            </div>
        </div>
    );
};