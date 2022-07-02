import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;
    }
    *, *:before, *:after{
        box-sizing: border-box:
    }
    body{
        margin: 0px;
        font-family: ${primaryFont};
    }
    main{
        width: 90%;
        margin: 0 auto;
    }
`;
