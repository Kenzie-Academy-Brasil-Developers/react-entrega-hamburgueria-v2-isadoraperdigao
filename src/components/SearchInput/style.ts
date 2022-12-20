import styled, { css } from "styled-components";
import { iInputProps } from "../../entities/iInputProps";
import { iSearchInputProps } from "../../entities/iSearchInputProps";

export const StyledSearchInput = styled.div`
    
    padding: 0.625em;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-color-white);
    border-radius: 8px;

    ${({isFocused} : iSearchInputProps) => {
        if(isFocused) {
            return css`
                border: 2px solid var(--color-gray-1);
            `
        } else {
            return css`
                border: 2px solid var(--color-gray-4);
            `
        }
    }}

    ${({isClicked} : iSearchInputProps) => {
        if(isClicked) {
            return css`
                width: 95%; 
                display: flex;
                position: absolute;
                left: 5px;
                top: 5px;
                z-index: 2;
            `
        } else {
            return css`
                display: none;
                
                @media (min-width: 960px) {
                    display: flex;
                    max-width: 365px;
                }
            `
        }
    }}

    input {
        border: none;

        ::placeholder {
            font-size: 1rem;
            font-weight: 400;
            color: var(--color-gray-4);
        }

        :focus {
            outline: none;
        }
    }
`