import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        --dark-grey: #1A1A1B;
        --grey: #333F44;
        --green: #37AA9C;
        --light-green: #94F3E4;
        --white: #EEEEEE;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    };
    html, body {
        width: 100%;
        overflow-x: hidden;
        background: var(--dark-grey);
        color: var(--white);
    }
`;
