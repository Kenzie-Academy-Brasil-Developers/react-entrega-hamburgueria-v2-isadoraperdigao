import { Link } from "react-router-dom"
import { StyledFormContainer } from "../../../styles/formContainer"
import { StyledForm } from "../../../styles/formStyle"
import { StyledTitle } from "../../../styles/typography"
import { BrandButton } from "../../../components/BrandButton"
import { FormInput } from "../../../components/FormInput"
import { GrayButton } from "../../../components/GrayButton"
import { StyledFormParagraph } from "./style"

export const LoginForm = () => {
    return (
        <StyledFormContainer>
            <StyledTitle>Login</StyledTitle>
            <StyledForm>
                <FormInput text="Nome" type="text"/>
                <FormInput text="Senha" type="password" />
                <BrandButton text="Logar" isDashboard={false} type="submit" />
            </StyledForm>
        </StyledFormContainer>
    )
}