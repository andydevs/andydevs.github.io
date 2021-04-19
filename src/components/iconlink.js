import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./iconlink.css"

export default function IconLink({ icon, href, size="2x" }) {
    return <a className='icon-link' href={href}>
        <FontAwesomeIcon icon={icon} size={size}/>
    </a>
}