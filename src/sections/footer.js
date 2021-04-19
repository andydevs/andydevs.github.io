import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <p>Copyright &copy; Anshul Kharbanda 2021</p>
            <p>
                <a className='icon-link' href={`mailto://${contact.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                </a>
                <a className='icon-link' href={contact.social.linkedin}>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </a>
                <a className='icon-link' href={`https://www.github.com/${contact.social.github}`}>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                </a>
            </p>
        </footer>
    )
}