import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import IconLink from '../components/iconlink'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'
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
                    }
                }
            }
        }
    `)

    return (
        <StyledFooter>
            <p>
                <IconLink
                    large
                    icon={faGithub}
                    href={`https://www.github.com/${contact.github}`}
                />
                <IconLink large icon={faLinkedin} href={contact.linkedin} />
                <IconLink
                    large
                    icon={faItchIo}
                    href={`${contact.itch}.itch.io`}/>
                <IconLink
                    large
                    icon={faEnvelope}
                    href={`mailto://${contact.email}`}
                />
            </p>
            <p>
                Site Design largely inspired by{' '}
                <a href="http://brittanychiang.com">Brittany Chiang</a>
            </p>
        </StyledFooter>
    )
}
