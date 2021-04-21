import React from "react"
import Panel from '../components/panel';
import { useStaticQuery, graphql } from "gatsby";

export default function Work() {
    // Query
    const { contentYaml: { work } } = useStaticQuery(graphql`
        query WorkQuery {
            contentYaml {
                work {
                    id,
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
                    },
                    highlights
                }
            }
        }
    `)

    // Render
    return (
        <section id="work-experience">
            <h1>Work Experience</h1>
            <div>
                {work.map(({ id, company, jobTitle, timeline, highlights }) =>
                    <Panel key={id}>
                        <Panel.Body>
                            <h3>{company}</h3>
                            <h4>{jobTitle}</h4>
                            <h4>
                                {timeline.start.month} {timeline.start.year}
                                &nbsp; &mdash; &nbsp;
                                {timeline.current ? 'Present' : `${timeline.end.month} ${timeline.end.year}`}
                            </h4>
                            <hr/>
                            <ul>{highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}</ul>
                        </Panel.Body>
                    </Panel>
                )}
            </div>
        </section>
    )
}