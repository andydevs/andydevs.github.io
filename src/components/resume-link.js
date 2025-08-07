import React from 'react'
import { graphql, useStaticQuery } from "gatsby";


export function ResumeLink() {
    const { contentfulAsset: { url } } = useStaticQuery(graphql`
        query ResumeQuery {
            contentfulAsset(contentful_id: {eq: "3GtL8791DLHBNCTsmkmK7S"}) {
                url
            }
        }
    `)
    return <a href={url}>Resume</a>
}