import React from "react"
import { graphql, useStaticQuery } from "gatsby";

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
                <a href={"mailto://" + contact.email}>Email</a>
                <a href={contact.linkedin}>LinkedIn</a>
            </p>
        </footer>
    )
}