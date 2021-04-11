import React from "react"

const GitHubLink = ({ repo }) =>
    <a href={"https://github.com/andydevs/" + repo}>GitHub</a>

const WebsiteLink = ({ url }) =>
    <a href={url}>Website</a>

export default function Project({ title, description, website, github }) {
    return (
        <div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <p>
                { website && <WebsiteLink url={website}/> }
                { github && <GitHubLink repo={github}/> }
            </p>
        </div>
    )
}