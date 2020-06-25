import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
        outline: none;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html {
        background: #191919;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    #root {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;  
    }
`;

export default globalStyle;