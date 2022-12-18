import styled from "styled-components";

export const StyledSlogan = styled.div`
    background-color: var(--bg-color-white);
    width: 100%;
    padding: 1.125em 0.875em;
    max-width: 377px;
    display: flex;
    gap: 1.188em;
    align-items: center;
    border: 1px solid var(--color-gray-4);
    border-radius: 5px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    text-align: left;
    color: var(--color-gray-2);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 22px;

    p > span {
        color: var(--color-gray-1);
    }

    div {
        background-color: rgba(39, 174, 96, 0.1);
        padding: 1.25em;
        border-radius: 5px;
    }
`