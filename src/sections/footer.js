import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import IconLink from '../components/iconlink'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faItchIo
} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 12pt 0pt;
    text-align: center;
`

export default function Footer() {
    const {
        site: {
            siteMetadata: { contact }
        }
    } = useStaticQuery(graphql`
        query ContactQuery {
            site {
                siteMetadata {
                    contact {
                        github
                        linkedin
                        email
                        itch
                    }
                }
            }
        }
    `)

    return (
        <StyledFooter>
            <h3
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease">
                Get in Touch
            </h3>
            <p
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="500"
                data-sal-easing="ease">
                <IconLink
                    large
                    icon={faGithub}
                    href={`https://www.github.com/${contact.github}`}
                />
                <IconLink
                    large
                    icon={faItchIo}
                    href={`https://${contact.itch}.itch.io`}
                />
                <IconLink large icon={faLinkedin} href={contact.linkedin} />
                <IconLink
                    large
                    icon={faEnvelope}
                    href={`mailto://${contact.email}`}
                />
            </p>
            <p
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="500"
                data-sal-easing="ease">
                Site design largely inspired by{' '}
                <a href="http://brittanychiang.com">Brittany Chiang</a>
            </p>
        </StyledFooter>
    )
}
