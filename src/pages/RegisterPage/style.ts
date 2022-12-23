import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .registerPageContainer {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;

        @media (min-width: 960px) {
        flex-direction: row;
        gap: 3.875em;
    }
    }

    
`