import { Animacion } from "../css/bits-and-bytes-css-animation/Animacion"

export const Menu = () => {

    return (
        <div class='is-flex is-flex-direction-column is-align-items-center m-2'
            style={{ background: 'black', width: "250px", 'border-radius': 10, border: '1px solid white' }} >
            <div>
                <Animacion/>
            </div>
            <div class="has-text-centered mt-4">
                <aside class="menu">
                    <p class="menu-label"  style={{ color: 'white' }}>// PRINCIPAL</p>
                    <p class="menu-label"  style={{ color: 'white' }}>// EDUCACION</p>
                    <p class="menu-label"  style={{ color: 'white' }}>// SKILL</p>
                    <p class="menu-label"  style={{ color: 'white' }}>// PROYECTOS</p>
                    <p class="menu-label"  style={{ color: 'white' }}>// CONTACTO</p>
                </aside>
            </div>
        </div>

    )
}