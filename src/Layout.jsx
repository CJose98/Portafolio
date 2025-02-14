import { Outlet } from "react-router-dom"
import { Menu } from "./componentes/Menu"

export const Layout = () => {

    return (
        <div class="container">
            <div class="grid">
                <Menu />
                <main>
                    <Outlet /> {/* Aquí se renderizan las rutas anidadas */}
                </main>
            </div>
        </div>

    )
}