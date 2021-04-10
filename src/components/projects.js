import React from "react"
import Project from "./project"

export default function Projects({ projects }) {
    console.log(projects)

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div>
                {projects.map(
                    ({ id, title, description, github, website }) => 
                        <Project
                            key={id}
                            title={title}
                            description={description}
                            github={github}
                            website={website}/>
                )}
            </div>

        </section>
    )
}