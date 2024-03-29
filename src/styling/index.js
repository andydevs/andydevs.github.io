import { createGlobalStyle } from 'styled-components'

export const primary = '#00aaff'
export const darkPrimary = '#005580'
export const secondary = '#ffdd00'

export default createGlobalStyle`
    :root {
        --background: #333333;
        --panel: #404040;
        --primary: #00aaff;
        --dark-primary: #005580;
        --secondary: #ffdd00;
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
