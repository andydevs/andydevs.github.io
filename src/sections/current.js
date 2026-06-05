import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../components/section'
import { PieChart } from 'reactive-charts'

const degrees = Math.PI / 180

const pieStyle = {
    svg: { width: 900, height: 600 },
    maxCategories: 10,
    categoryCollapse: { label: { text: 'others...', color: '#666', fontStyle: 'italic' }, minAngle: 3 * degrees },
    sliceAngleGap: 1 * degrees,
    sliceMaxRadius: 210,
    sliceThickness: 50,
    sliceCornerRadius: 3,
    labelOffset: 35,
    labelPadding: 4,
    labelHeight: 2
}

export default function Current() {
    let {
        allGithubRepo: { nodes: repos }
    } = useStaticQuery(graphql`
        query GithubQuery {
            allGithubRepo {
                nodes {
                    name
                    languages {
                        name
                        color
                        size
                    }
                }
            }
        }
    `)

    let languages = repos
        .flatMap(repo => repo.languages)
        .reduce((obj, language) => {
            if (!obj[language.name]) {
                obj[language.name] = { color: language.color, size: 0 }
            }
            obj[language.name].size += language.size
            return obj
        }, {})

    let labels = Object.entries(languages).map(([name, { color, size }]) => ({
        label: {
            text: name,
            color: color,
            fontStyle: 'normal'
        },
        value: size
    }))
    console.log(labels)

    return (
        <Section id="current">
            <h1 data-sal="slide-up" data-sal-delay="300" data-sal-duration="500" data-sal-easing="ease">
                What I've Been Working With
            </h1>
            <PieChart
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="500"
                data-sal-easing="ease"
                style={pieStyle}
                categories={labels}
            />
        </Section>
    )
}
