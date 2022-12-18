import styled, { css } from "styled-components";
import { iBrandLogoProps } from ".";

export const StyledBrandLogo = styled.img`
    ${({isDashboard} : iBrandLogoProps) =>{
        switch(isDashboard) {
            case true: 
                return css`
                    height: 36.83px;
                    width: 158.94px;
                `;
            case false: 
                return css`
                   height: 56.9px;
                   width: 243.43px;
                `;
            // no default        
        }
    }}
`