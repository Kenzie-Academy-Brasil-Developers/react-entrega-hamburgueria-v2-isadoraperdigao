import styled, { css } from "styled-components";
import { iButtonProps } from "../../entities/iButtonProps";

export const StyledGrayButton = styled.button`
    max-height: 40px;
    padding: 0.719rem;
    background-color: var(--bg-color-gray-1);
    border: 2px solid var(--bg-color-gray-1);
    border-radius: 8px;
    color: var(--color-gray-2);
    font-size: 0.875rem;
    font-weight: 600;

    ${({isDashboard} : iButtonProps) => {
        switch(isDashboard) {
            case true:
                return css`
                    width: 6.625em;
                `;
            case false: 
                return css`
                    width: 100%;
                `
        }
    }}

    :hover {
        background-color: var(--bg-color-gray-3);
        color: var(--color-gray-4);
    }
`