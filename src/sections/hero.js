import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import "./hero.css"

export default function Hero() {
    // Query
    const { contentYaml: { blurb } } = useStaticQuery(graphql`
        query HeroQuery {
            contentYaml {
                blurb
            }
        }
    `)

    // Render
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='title'>
                    <h1 className='title-upper'>Anshul Kharbanda</h1>
                    <h2 className='title-lower'>Andydevs</h2>
                </div>
                <p className='blurb'>{blurb}</p>
                <p className='bold'>If you're looking for the old blog, you can find it
                <a href="https://andydevs.github.io/">Here</a></p>
            </div>
        </div>
    )
}