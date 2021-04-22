import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledA = styled.a`
    margin-right: 12pt;
    font-size: 20pt;
    &:before { content: ''; }
`

export default function IconLink({ icon, href }) {
    return (
        <StyledA href={href}>
            <FontAwesomeIcon icon={icon}/>
        </StyledA>
    )
}