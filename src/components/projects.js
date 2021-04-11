import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Project from "./project"

export default function Projects() {
    const { contentJson } = useStaticQuery(graphql`
        query ProjectsQuery {
            contentJson {
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
                {contentJson.projects.map(
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