import styled, { css } from "styled-components";
import { iBrandLogoProps } from "../BrandLogo";

export const StyledBrandButton = styled.button`
    max-height: 40px;
    padding: 0.719rem;
    background-color: var(--color-brand);
    border: 2px solid var(--color-brand);
    border-radius: 8px;
    color: var(--color-white);
    font-size: 0.875rem;
    font-weight: 600;

    ${({isDashboard} : iBrandLogoProps) => {
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