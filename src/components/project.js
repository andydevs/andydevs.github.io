import React from "react"

const GitHubLink = ({ repo }) =>
    <a href={"https://github.com/andydevs/" + repo}>GitHub</a>

export default function Project(props) {
    return (
        <div>
            <h3>{ props.title }</h3>
            <p>{ props.description }</p>
            <p>
                { props.website && <a href={props.website}>Website</a> }
                { props.github && <GitHubLink repo={props.github}/> }
            </p>
        </div>
    )
}