import styled from "styled-components";

export const StyledShoppingCartHeader = styled.div`
    width: 100%;
    height: 65px;
    padding: 1.313rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-brand);
    border-radius: 5px 5px 0 0;
    
    h2 {
        color: var(--color-white);
        font-size: 1.125rem;
        font-weight: 700;
    }

    span {
        color: var(--color-white);
        font-size: 1.125rem;
        font-weight: 400;
        cursor: pointer;
    }
`