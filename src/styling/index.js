import { createGlobalStyle } from 'styled-components'

export const primary = '#00b6e8'
export const darkPrimary = '#154bb2'
export const secondary = '#ea9300'

export default createGlobalStyle`
    :root {
        --black: #000000;
        --less-black: #070707;
        --dark-purple: #12101c;
        --purple: #4d15b2;
        --blue: #154bb2;
        --light-blue: #00b6e8;
        --red: #ea3900;
        --orange: #ea9300;
        --yellow: #e8e200;
        --white: #e3dad3;

        --star-gradient: linear-gradient(45deg, var(--red) 0%, var(--orange) 20%, var(--yellow) 80%, var(--white));
        --sky-gradient: linear-gradient(45deg, var(--purple) 0%, var(--blue) 50%, var(--light-blue));
        --space-gradient: linear-gradient(45deg, var(--less-black), var(--dark-purple));

        --background: var(--black);
        --panel: var(--dark-purple);
        --primary: var(--light-blue);
        --dark-primary: var(--blue);
        --secondary: var(--orange);
        --text: white;
        --secondary-text: black;
        --faded: #bbbbbb;
    }

    * {
        font-family: 'Rubik', 'Verdana', Arial, sans-serif;
        font-weight: 300;
    }
    body {
        min-height: -webkit-fill-available;
        padding: 0;
        margin: 0;
        background-color: var(--background);
        color: var(--text);
    }
    
    a {
        color: var(--secondary);
        text-decoration: none;
        margin: 0pt 2pt;
    }
    a:before {
        content: '>';
    }
    a.icon-link:before {
        content: '';
        margin-right: 0;
    }

    h1, h2 {
        font-weight: 600;
    }
    h1 {
        font-size: 40pt;
        padding-bottom: 6pt;
    }
    h1:before {
        color: var(--primary);
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
