import { Outlet } from "react-router-dom";
import { Menu } from "./componentes/Menu";

export const Layout = () => {
    return (
        <div className="layout-container">
            {/* Menú (columna izquierda) */}
            <Menu />

            {/* Contenido principal (columna derecha) */}
            <main className="main-content">
                <Outlet /> {/* Aquí se renderizan las rutas anidadas */}
            </main>
        </div>
    );
};