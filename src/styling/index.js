import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --black: #333333;
        --less-black: #404040;
        --blue: #00aaff;
        --dark-blue: #0088cc;
        --white: white;
    }

    * {
        font-family: 'Rubik', 'Verdana', Arial, sans-serif;
    }
    p {
        font-weight: 300;
    }
    h1,h2 {
        font-weight: 600;
    }
    body {
        margin: 0;
        background-color: var(--black);
        color: white;
    }
    
    a {
        color: var(--blue);
        text-decoration: none;
        margin: 0pt 2pt;
    }
    a::before {
        content: '>';
    }
    a.icon-link::before {
        content: '';
        margin-right: 0;
    }

    h1 {
        color: var(--blue);
        font-size: 30pt;
        padding-bottom: 6pt;
    }
    h1:before,h2:before {
        content: '>';
        margin-right: 6pt;
    }

    ul {
        padding-left: 24pt;
    }

    ul > li {
        margin: 8pt 0pt;
    }
`