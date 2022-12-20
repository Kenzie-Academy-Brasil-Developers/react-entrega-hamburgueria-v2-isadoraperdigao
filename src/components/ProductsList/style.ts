import styled from "styled-components";

export const StyledProductsList = styled.ul`
    margin-top: 2.125em;
    display: flex;
    gap: 1.25em;
    overflow-x: scroll;

    @media (min-width: 960px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3.5em;
    }
`