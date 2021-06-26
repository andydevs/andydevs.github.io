import React from "react";
import styled, { css } from "styled-components";

const Panel = styled.div`
    border-radius: 8pt;
    border-color: inherit;
    background-color: var(--less-black);
    overflow: hidden;

    /* Sizing */
    ${props => props.large && css`
        grid-row: span 2;
    `}

    /* Shadow */
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);

    /* Grid save me */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "image"
        "body"
        "footer";
`

const ImageTitleDiv = styled.div`
    grid-area: image;
    position: static;
`

const ImageTitleContainer = styled.div`
    position: relative;
`

const Image = styled.img`
    position: relative;
    z-index: 0;
    width: 100%;
`

const Title = styled.h3`
    position: absolute;
    display: inline-block;
    z-index: 1;
    margin: 0;
    bottom: 0pt;
    left: 0pt;
    margin: 16pt;
    font-weight: 500;
    font-size: 24pt;
`

Panel.ImageTitle = ({ title, base64 }) => (
    <ImageTitleDiv>
        <ImageTitleContainer>
            <Image alt={title} src={base64}/>
            <Title>{title}</Title>
        </ImageTitleContainer>
    </ImageTitleDiv>
)

Panel.Body = styled.div`
    grid-area: body;
    margin: 16pt;
    h3 {
        font-weight: bold;
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
`

Panel.Footer = styled.div`
    grid-area: footer;
    margin: 8pt 16pt 16pt 16pt;
`

export default Panel