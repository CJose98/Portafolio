import { Animacion } from "../css/bits-and-bytes-css-animation/Animacion"

export const Menu = () => {

    return (
        <div class='has-background-dark is-flex is-flex-direction-column is-align-items-center m-3'
            style={{ width: "250px", 'border-radius': 10 }}>
            <div>
                <Animacion/>
            </div>
            <div class="has-text-centered mt-4">
                <aside class="menu">
                    <p class="menu-label">HOME</p>
                    <p class="menu-label">ABOUT ME</p>
                    <p class="menu-label">SERVICES</p>
                    <p class="menu-label">PORTFOLIO</p>
                    <p class="menu-label">CONTACT ME</p>
                </aside>
            </div>
        </div>

    )
}