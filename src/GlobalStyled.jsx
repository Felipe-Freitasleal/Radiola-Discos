import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        margin: 0 auto;
        box-sizing: border-box;

    }

    ::-webkit-scrollbar {
        width: 4px; /* largura da barra de rolagem */
    }


    ::-webkit-scrollbar-thumb {
        background-color: #b5b4b4; 
        border-radius: 6px;
    }


    ::-webkit-scrollbar-track {

    }
`;
