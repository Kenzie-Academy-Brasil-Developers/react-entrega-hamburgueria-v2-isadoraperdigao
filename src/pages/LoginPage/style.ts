import styled from "styled-components";

export const StyledLoginPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .loginPageContainer {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;

        

        @media (min-width: 960px) {
        flex-direction: row;
        gap: 3.875em;
    }

    .formContainer {
        display: flex;
        flex-direction: column;
        gap: 1.25em;
    }


    }
    
`