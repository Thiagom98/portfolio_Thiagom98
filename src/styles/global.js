import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-secundary:#EB5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --font-primary: 'Roboto Mono', monospace;
    }
    #root{
        height: 100%;
    }
    body{
        height: 100vh;
    }
    main{
        padding: 0 5%;
        display: flex;
        flex-direction: column;
    }
    @media(min-width: 1024px){
    main{
        padding: 0rem 10%;
        flex-direction: row;
        gap: 4.125rem;
    }

}
`