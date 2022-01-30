import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        font-family: 'Titillium Web', sans-serif;
        color: ${(props) => props.textColor}
    }

    h1{
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    }

    h2{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    p{
        line-height: 21px;
    }

    strong{
        font-weight: 600;
    }
`;

export default GlobalStyles;
