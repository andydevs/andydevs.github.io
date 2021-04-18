import React from "react"
import Panel from "../components/panel";
import { graphql, useStaticQuery } from "gatsby"

export default function Projects() {
    // Query
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

    // Render
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                {projects.map(({ id, title, description, github, website }) => 
                    <Panel key={id} color="blue">
                        <Panel.Header>
                            <Panel.Title>{title}</Panel.Title>
                        </Panel.Header>
                        <p>{description}</p>
                        <Panel.Footer>
                            { website && <a href={website}>Website</a> }
                            { github && <a href={`https://github.com/andydevs/${github}`}>GitHub</a> }
                        </Panel.Footer>
                    </Panel>
                )}
            </div>
        </section>
    )
}