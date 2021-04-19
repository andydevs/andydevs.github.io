import React from "react"
import Panel from "../components/panel";
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <h1>Projects</h1>
            <div>
                {projects.map(({ id, title, description, github, website }) => 
                    <Panel key={id}>
                        <Panel.Header>
                            <Panel.Title>{title}</Panel.Title>
                        </Panel.Header>
                        <p>{description}</p>
                        <Panel.Footer>
                            { website && <a className='icon-link' href={website}><FontAwesomeIcon icon={faGlobe} size='lg'/></a> }
                            { github && <a className='icon-link' href={`https://github.com/andydevs/${github}`}><FontAwesomeIcon icon={faGithub} size='lg'/></a> }
                        </Panel.Footer>
                    </Panel>
                )}
            </div>
        </section>
    )
}