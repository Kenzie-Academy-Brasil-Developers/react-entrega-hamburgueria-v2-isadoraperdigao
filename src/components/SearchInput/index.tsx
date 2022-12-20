import { useState } from "react";
import SearchButton from "../../assets/img/buttonSearch.svg"
import { iSearchInputProps } from "../../entities/iSearchInputProps";
import { StyledSearchInput } from "./style"

export const SearchInput = ({isClicked, callbackOnBlur} : iSearchInputProps) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <StyledSearchInput isFocused={isFocused} isClicked={isClicked} callbackOnBlur={callbackOnBlur}>
            <input 
            type="text"
            placeholder="Digitar pesquisa"
            onFocus={() => setIsFocused(true)} 
            onBlur={() => {
                setIsFocused(false)
                callbackOnBlur()
            }}  />
            <img src={SearchButton} alt="Ícone de lupa em fundo verde" />
        </StyledSearchInput>
    )
}