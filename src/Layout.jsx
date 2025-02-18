import { Outlet } from "react-router-dom"
import { Menu } from "./componentes/Menu"

export const Layout = () => {

    return (
        <div class="is-flex" style={{ minHeight: "100vh" }} >
           {/* Menú (columna izquierda) */}
                <Menu />
            {/* Contenido principal (columna derecha) */}
            <main className="is-flex-grow-1">
                <Outlet /> {/* Aquí se renderizan las rutas anidadas */}
            </main>
        </div>
    )
}