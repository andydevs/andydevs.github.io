import React from "react"
import { graphql, useStaticQuery } from "gatsby";

export default function Skills() {
    const { contentYaml: { skills } } = useStaticQuery(graphql`
        query SkillsQuery {
            contentYaml {
                skills {
                    section,
                    skills
                }
            }
        }
    `)

    return (
        <section id="skills">
            <h2>Skills</h2>
            <table>
                <tbody>
                    {skills.map((sksection, index) => 
                        <tr key={index}>
                            <td>{sksection.section}</td>
                            <td>
                                <ul>
                                    {sksection.skills.map((skill, jndex) => 
                                        <li key={jndex}>{skill}</li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}