import styled, { css } from "styled-components";
import { iInputProps } from "../../entities/iInputProps";


export const StyledFormInput = styled.div`
    width: 100%;
    padding: 1.25em;
    
    border-radius: 5px;
    position: relative;

    ${({isFocused} : iInputProps) => {
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

    input {
        border: none;
        color: var(--color-gray-1);
        font-size: 1rem;

        :focus {
            outline: none;
        }

        ${({isFocused} : iInputProps) => {
            if(!isFocused) {
                return css`
                    ::placeholder {
                    color: var(--color-gray-5);
                    font-size: 1rem;
                    font-weight: 400;
                }`;
            } else {
                    return css`
                        ::placeholder {
                            color: var(--color-white);
                        }
                    `
                }
        }
    }}

    label {
        ${({isFocused} : iInputProps) => {if(isFocused) {
            return css`
                display: block;
                color: var(--color-gray-5);
                font-size: 0.75rem;
                font-weight: 400;
                position: absolute;
                padding: 0 0.2em;
                top: -8px;
                z-index: 2;
                background-color: var(--bg-color-white);
            `
            } else {
                return css`
                    display: none;
                `
            }}
        }
        
    }
`