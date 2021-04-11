import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Project from "../components/project"

export default function Projects() {
    const { contentYaml: { projects } } = useStaticQuery(graphql`
        query ProjectsQuery {
            contentYaml {
                projects {
                    id,
                    title,
                    description,
                    website,
                    github
                }
            }
        }
    `)

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