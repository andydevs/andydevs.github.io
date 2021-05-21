import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    :root {
        --black: #333333;
        --less-black: #404040;
        --blue: #00aaff;
        --dark-blue: #0088cc;
        --white: white;
    }

    * {
        font-family: 'Roboto', Arial, sans-serif;
        font-weight: 300;
    }
    body {
        margin: 0;
        background-color: var(--black);
        color: white;
    }
    a::before {
        content: '>';
        margin-right: 2pt;
    }
    a.icon-link::before {
        content: '';
        margin-right: 0;
    }
    a {
        color: var(--blue);
        text-decoration: none;
        margin-left: 2pt;
        margin-right: 2pt;
    }

    h1 {
        color: var(--blue);
        font-size: 24pt;
        padding-bottom: 6pt;
    }
    h1:before,h2:before {
        content: '>';
        margin-right: 4pt;
    }

    ul {
        padding-left: 24pt;
    }

    ul > li {
        margin: 8pt 0pt;
    }
`