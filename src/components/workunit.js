import React from "react"
import Panel from "../components/panel";

const Timeline = ({ current, start, end }) => current
    ? <h4>{start.month} {start.year} - Present</h4>
    : <h4>{start.month} {start.year} - {end.month} {end.year}</h4>

export default function WorkUnit({ company, jobTitle, timeline }) {
    return (
        <Panel color="purple">
            <div>
                <h3>{company}</h3>
                <h4>{jobTitle}</h4>
                <Timeline {...timeline}/>
            </div>
        </Panel>
    )
}