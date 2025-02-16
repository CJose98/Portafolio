import React from "react"

export const AboutMe = () => {
    return (
        <div class='has-background-black-ter is-flex is-align-items-center is-justify-content-center' style={{ minHeight: "100vh" }}>
            <div class="container ml-6" >
                <div class='columns is-vcentered'>
                    {/* Columna de texto */}
                    <div class='column is-half'>
                        <h4 class="title is-5">Hello, I am</h4>
                        <h1 class="title" >Jose Colque</h1>
                        <h5 class="title is-5">I'm a Passionate Developer</h5>
                        <p className="subtitle is-5 has-text-grey-light">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                    </div>
                    {/* Columna de imagen */}
                    <div class='column is-half'>
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/360x640.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}