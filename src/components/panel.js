import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const Panel = styled.div`
    border-radius: 8pt;
    border-color: inherit;
    background: var(--space-gradient);
    overflow: hidden;

    /* Sizing */
    ${props =>
        props.large &&
        css`
            grid-row: span 2;
        `}

    /* Shadow */
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0, 0, 0, 0.37);
    box-shadow: 4px 4px 21px -6px rgba(0, 0, 0, 0.37);

    /* Grid save me */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'header'
        'body'
        'footer';
`

const ImageTitleHeader = styled.div`
    grid-area: header;
    position: static;
`

const ImageTitleContainer = styled.div`
    position: relative;
`

const ImageTitle = styled.h3`
    position: absolute;
    display: inline-block;
    z-index: 1;
    margin: 0;
    bottom: 0pt;
    left: 0pt;
    margin: 16pt;
    font-weight: 500;
    font-size: 28pt;

    color: ${props => props.black ? `var(--black)` : `var(--white)`}
`

const TitleHeader = styled.div`
    grid-area: header;
    position: static;
    background: var(--sky-gradient);
`

const RegularTitle = styled.h3`
    margin: 12pt 16pt;
    font-weight: 500;
    font-size: 18pt;
    color: var(--white);
`

Panel.Title = ({ title }) => (
    <TitleHeader>
        <RegularTitle>{title}</RegularTitle>
    </TitleHeader>
)

Panel.ImageTitle = ({ title, black=false, imageData }) => (
    <ImageTitleHeader>
        <ImageTitleContainer>
            <GatsbyImage image={imageData} />
            <ImageTitle black={black}>{title}</ImageTitle>
        </ImageTitleContainer>
    </ImageTitleHeader>
)

Panel.Body = styled.div`
    grid-area: body;
    margin: 16pt;
    h3 {
        font-weight: 500;
        margin: 4pt 0pt;
    }
    h4 {
        margin: 2pt 0pt;
    }
    hr {
        margin: 12pt 0pt;
    }
    ul {
        list-style-type: circle;
    }
    p:first-child {
        margin-top: 0pt;
    }
`

Panel.Footer = styled.div`
    grid-area: footer;
    margin: 8pt 16pt 16pt 16pt;
`

export default Panel
