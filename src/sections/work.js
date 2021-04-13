import React from "react"
import WorkUnit from "../components/workunit";
import { useStaticQuery, graphql } from "gatsby";

export default function Work() {
    const { contentYaml: { work } } = useStaticQuery(graphql`
        query WorkQuery {
            contentYaml {
                work {
                    company,
                    jobTitle,
                    timeline {
                        current,
                        start {
                            month, 
                            year
                        },
                        end {
                            month,
                            year
                        }
                    }
                }
            }
        }
    `)

    return (
        <section id="work-experience">
            <h2>Work Experience</h2>
            <div>
                {work.map(unit => (
                    <WorkUnit key={unit.id} {...unit}/>
                ))}
            </div>
        </section>
    )
}