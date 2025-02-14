import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <div className="App">
            <main>
                <Outlet /> {/* Aquí se renderizan las rutas anidadas */}
            </main>
        </div>
    )
}