import styled from "styled-components";

export const StyledSelectedProductCard = styled.li`
    width: 100%;
    max-width: 500px;
    background-color: var(--bg-color-white);
    padding:  1.25em;

    .cardContainer {
        display: flex;
        width: 100%;
        max-width: 500px;
        justify-content: space-between;
    }

    .cardContentContainer{
        display: flex;
        align-items: center;
        gap: 0.625rem;
    }

    .imgContainer {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        border: 1px solid var(--bg-color-gray-2);
        background-color: var(--bg-color-gray-2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .counter {
        display: flex;

        button {
            width: 30.44px;
            height: 34px;
            background-color: var(--bg-color-gray-4);
            border: 1px solid var(--bg-color-gray-4);
            color: var(--color-red);
            font-size: 1.25rem;
            font-weight: 400;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 46px;
            border: 1px solid var(--bg-color-gray-4);
        }
    }

    .removeItemButton {
        width: 14px;
        height: 18px;
        margin-top: 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
    }

    img {
        height: 100%;
        object-fit: contain;
    }

    div {
        text-align: left;
    }

    div > h3 {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--color-gray-1);
        max-width: 22ch;
        text-overflow: ellipsis;
        margin-bottom: 1rem;
    }
`