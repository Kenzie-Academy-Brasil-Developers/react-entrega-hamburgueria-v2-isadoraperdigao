import styled, { css } from "styled-components";

interface iLabelProps {
    isFocused: boolean;
}

export const StyledFormInput = styled.div`
    width: 100%;
    padding: 1.25em;
    border: 2px solid var(--color-gray-1);
    border-radius: 5px;
    position: relative;

    input {
        border: none;
        color: var(--color-gray-1);
        font-size: 1rem;

        :focus {
            outline: none;
        }

        ${({isFocused} : iLabelProps) => {
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
        ${({isFocused} : iLabelProps) => {if(isFocused) {
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