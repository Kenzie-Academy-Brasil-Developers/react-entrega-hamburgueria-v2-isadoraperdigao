import styled from "styled-components";

export const StyledCard = styled.li`
    min-height: 346px;
    min-width: 300px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1.688rem;
    border: 2px solid var(--color-gray-4);
    border-radius: 5px;

    :hover {
        border: 2px solid var(--color-brand);

        button {
            background-color: var(--color-brand);
            color: var(--color-white);
        }
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: contain;
        background-color: var(--bg-color-gray-1);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.875rem;
        padding: 0 1.25rem;
    }

    div > h2 {
        color: var(--color-gray-1);
        font-size: 1.125rem;
        font-weight: 700;
    }

    div > span {
        color: var(--color-gray-2);
        font-size: 0.875rem;
        font-weight: 400;
    }

    div > p {
        color: var(--color-brand);
        font-size: 0.875rem;
        font-weight: 600;
    }
`