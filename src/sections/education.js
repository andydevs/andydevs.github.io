import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Panel from "../components/panel";

export default function Education() {
    const { contentYaml: { education } } = useStaticQuery(graphql`
        query EducationQuery {
            contentYaml {
                education {
                    school,
                    degree,
                    graduated {
                        month,
                        year
                    },
                    GPA
                }
            }
        }
    `)

    return (
        <section id="education">
            <h2 className="text-green">Education</h2>
            <Panel color="green">
                <p>{education.school}</p>
                <p>{education.degree}</p>
                <p>Graduated {education.graduated.month} {education.graduated.year}</p>
                <p>GPA: {education.GPA}</p>
            </Panel>
        </section>
    )
}