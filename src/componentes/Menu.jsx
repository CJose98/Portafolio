import { Animacion } from "../css/bits-and-bytes-css-animation/Animacion"

export const Menu = () => {

    return (
        <div class='has-background-dark is-flex is-flex-direction-column is-align-items-center m-2'
            style={{ width: "250px", 'border-radius': 10 }} >
            <div>
                <Animacion/>
            </div>
            <div class="has-text-centered mt-4">
                <aside class="menu">
                    <p class="menu-label">// PRINCIPAL</p>
                    <p class="menu-label">// EDUCACION</p>
                    <p class="menu-label">// SKILL</p>
                    <p class="menu-label">// CONTACTO</p>
                </aside>
            </div>
        </div>

    )
}