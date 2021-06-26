import styled from "styled-components";

// Styled message thing
export default styled.p`
    margin: 8pt 0pt;
    background-color: var(--dark-blue);
    padding: 8pt;
    display: inline-block;

    /* Panel-like */
    border-radius: 4pt;
    -webkit-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    -moz-box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);
    box-shadow: 4px 4px 21px -6px rgba(0,0,0,0.37);

    a {
        color: white;
    }
`