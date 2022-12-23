import styled from "styled-components";

export const StyledCartValueResult = styled.div`
    background-color: var(--bg-color-white);
    padding: 1.25em;
    border-radius: 0 0 5px 5px;
    

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25em;
        border-top: 2px solid var(--color-gray-4);
    }

    p {
        color: var(--color-gray-1);
        font-size: 0.875rem;
        font-weight: 600;
        margin-top: 1em;
    }

    span {
        color: var(--color-gray-2);
        font-size: 0.875rem;
        font-weight: 600;
        margin-top: 1em;
    }
`