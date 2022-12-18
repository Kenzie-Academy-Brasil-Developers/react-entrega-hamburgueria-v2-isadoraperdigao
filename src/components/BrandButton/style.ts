import styled, { css } from "styled-components";
import { iButtonProps } from "../../entities/iButtonProps";

export const StyledBrandButton = styled.button`
    max-height: 40px;
    padding: 1.5em;
    background-color: var(--color-brand);
    border: 2px solid var(--color-brand);
    border-radius: 8px;
    color: var(--color-white);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;

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
        background-color: var(--color-brand-hover);
        border: 2px solid var(--color-brand-hover);
    }
`   