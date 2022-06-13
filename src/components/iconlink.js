import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'

const StyledA = styled.a`
    ${props =>
        props.large
            ? css`
                  font-size: 28pt;
              `
            : css`
                  font-size: 22pt;
              `}
    margin: 0pt 10pt;
    &:before {
        content: '';
    }
`

export default function IconLink({ large = false, icon, href }) {
    return (
        <StyledA href={href} large={large}>
            <FontAwesomeIcon icon={icon} />
        </StyledA>
    )
}

IconLink.Group = styled.div`
    flex: 0;
    display: flex;
    flex-direction: row-reverse;
    margin: 0pt;
`
