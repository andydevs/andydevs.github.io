import React from "react"
import Panel from "../components/panel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"

export default function Navbar() {
    // Button toggle
    const [ toggle, setToggle ] = React.useState(false);
    const toggleEvent = () => setToggle(!toggle);

    return (
        <Panel color="blue" className='navbar'>
            <div className='nav-header'>
                <button onClick={toggleEvent} className='nav-toggle'>
                    <FontAwesomeIcon icon={faBars} size="3x"/>
                </button>
            </div>
            {toggle &&
                <ul className='nav-list'>
                    <li className='nav-link'><a href='#projects'>Projects</a></li>
                    <li className='nav-link'><a href='#education'>Education</a></li>
                    <li className='nav-link'><a href='#skills'>Skills</a></li>
                    <li className='nav-link'><a href='#work-experience'>Work</a></li>
                    <li className='nav-link'><a href='#contact'>Contact</a></li>
                </ul>}
        </Panel>
    )
}