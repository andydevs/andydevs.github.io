import styled from "styled-components";

const Panel = styled.div`
    border-radius: 8pt;
    border-color: inherit;
    background-color: var(--less-black);
    overflow: hidden;

    /* Shadow */
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
`

Panel.Image = styled.img`
    width: 100%;
`

Panel.Body = styled.div`
    margin: 16pt;
    h3 {
        font-weight: bold;
        margin: 4pt 0pt;
    }
    h4 { 
        font-style: italic;
        margin: 2pt 0pt;
    }
    hr {
        margin: 12pt 0pt;
    }
    ul {
        list-style-type: circle;
    }
`

export default Panel