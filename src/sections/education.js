import React from "react"
import { graphql, useStaticQuery } from "gatsby";

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
            <h2>Education</h2>
            <div>
                <p>{education.school}</p>
                <p>{education.degree}</p>
                <p>Graduated {education.graduated.month} {education.graduated.year}</p>
                <p>GPA: {education.GPA}</p>
            </div>
        </section>
    )
}