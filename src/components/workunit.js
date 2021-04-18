import React from "react"
import Panel from "../components/panel"
import "./workunit.css"

export default function WorkUnit({ company, jobTitle, timeline, highlights }) {
    return (
        <Panel color="purple">
            <div className='work-header'>
                <h3 className='work-title'>{company}</h3>
                <h4 className='work-subtitle'>{jobTitle}</h4>
                <h4 className='work-subtitle'>
                    {timeline.start.month} {timeline.start.year}
                    &nbsp; &mdash; &nbsp;
                    { timeline.current ? 'Present' : `${timeline.end.month} ${timeline.end.year}` }
                </h4>
            </div>
            <ul className='highlight-list'>
                {highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
            </ul>
        </Panel>
    )
}