import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css"

export default function Footer() {
    const { contentYaml: { contact } } = useStaticQuery(graphql`
        query ContactQuery {
            contentYaml {
                contact {
                    email,
                    social {
                        linkedin
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
                <a className='icon-link' href={contact.linkedin}>
                    <FontAwesomeIcon icon='linkedin' size='2x'/>
                </a>
            </p>
        </footer>
    )
}