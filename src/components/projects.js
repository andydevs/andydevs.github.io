import React from "react"

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>

            {/* The projects are in a list */}
            <div>

                <div>
                    <h3>Andy's Notebook</h3>
                    <p>
                        Image
                    </p>
                    <p>
                        Ongoing project where I demo
                        and experiement with different
                        programming and data science
                        things in Jupyter Notebook
                    </p>
                    <p>
                        <a href="https://github.com/andydevs/andys-notebook">GitHub</a>
                        <a href="https://andydevs.github.io/andys-notebook">Website</a>
                    </p>
                </div>

                <div>
                    <h3>Blocky's Adventure in Blockworld</h3>
                    <p>
                        Image
                    </p>
                    <p>
                        My first videogame... it's not anything
                        to write home about. It serves as a testbench
                        for learning about different elements of game
                        design
                    </p>
                    <p>
                        <a href="https://github.com/andydevs/blockys-adventure-in-blockworld">GitHub</a>
                        <a href="https://github.com/andydevs/blockys-adventure-in-blockworld/releases">Releases</a>
                    </p>
                </div>

            </div>

        </section>
    )
}