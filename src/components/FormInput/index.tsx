import { forwardRef, useState } from "react";
import { StyledFormInput } from "./style";

interface iFormInputProps {
    text: string;
    type: string;
}

export const FormInput = forwardRef<HTMLInputElement, iFormInputProps>(({text, type, ...rest}, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <StyledFormInput isFocused={isFocused}>
            <label >{text}</label>
            <input 
                ref={ref} 
                placeholder={text} 
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} 
                type={type}
                {...rest}
            />
        </StyledFormInput>
    )
})