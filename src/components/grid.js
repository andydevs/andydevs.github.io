import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 16pt;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`