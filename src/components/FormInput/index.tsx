import { useState } from "react";
import { StyledFormInput } from "./style";

interface iFormInputProps {
    text: string;
    type: string;
}

export const FormInput = ({text, type} : iFormInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <StyledFormInput isFocused={isFocused}>
            <label >{text}</label>
            <input placeholder={text} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} type={type}/>
        </StyledFormInput>
    )
}