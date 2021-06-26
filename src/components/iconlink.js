import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledA = styled.a`
    font-size: 20pt;
    margin: 0pt 10pt; 
    &:before { content: ''; }
`

export default function IconLink({ icon, href }) {
    return (
        <StyledA href={href}>
            <FontAwesomeIcon icon={icon}/>
        </StyledA>
    )
}

IconLink.Group = styled.div`
    flex: 0;
    display: flex;
    flex-direction: row-reverse;
    margin: 0pt;
`