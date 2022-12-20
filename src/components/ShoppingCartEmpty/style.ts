import styled from "styled-components";

export const StyledShoppingCartEmpty = styled.div`
    background-color: var(--bg-color-gray-1);
    height: 158px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    border-radius: 0 0 5px 5px;

    h2 {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--color-gray-1);
    }

    span {
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--color-gray-2);
    }
`