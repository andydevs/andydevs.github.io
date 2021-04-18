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

    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='title'>
                    <h1 className='title-upper'>Anshul Kharbanda</h1>
                    <h2 className='title-lower'>Andydevs</h2>
                </div>
                <p className='blurb'>{blurb}</p>
            </div>
        </div>
    )
}