import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import IconLink from '../components/iconlink';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css"

export default function Footer() {
    const { contentYaml: { contact } } = useStaticQuery(graphql`
        query ContactQuery {
            contentYaml {
                contact {
                    email,
                    social {
                        linkedin,
                        github
                    }
                }
            }
        }
    `)

    return (
        <footer>
            <p>
                <IconLink icon={faEnvelope} href={`mailto://${contact.email}`}/>
                <IconLink icon={faLinkedin} href={contact.social.linkedin}/>
                <IconLink icon={faGithub} href={`https://www.github.com/${contact.social.github}`}/>
            </p>
            <p>
                Site Design largely inspired by <a href='http://brittanychiang.com'>Brittany Chiang</a>
            </p>
        </footer>
    )
}