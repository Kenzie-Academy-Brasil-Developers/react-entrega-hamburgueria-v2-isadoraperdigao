import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1.25em 0;
    background-color: var(--bg-color-gray-1);

    .clickableImg {
        cursor: pointer;
    }

    .headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }

    .headerContent {
        display: flex;
        gap: 1.25em;
        align-items: center;
    }

    .shoppingCartImg {
        position: relative;
    }

    .shoppingCartCounter {
        width: 20px;
        height: 24px;
        border-radius: 7px;
        background-color: var(--color-brand);
        color: var(--color-white);
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: -10px;
        top: -10px;
    }

    #searchIcon {
        display: block;

        @media (min-width: 960px) {
            display: none;
        }
    }
`