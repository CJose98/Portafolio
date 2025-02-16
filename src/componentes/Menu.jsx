

export const Menu = () => {

    return (
        <div class='has-background-dark is-flex is-flex-direction-column is-align-items-center' style={{ height: "100vh", width: "200px"}}>
            <figure class="image is-128x128 mt-2">
                <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </figure>
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