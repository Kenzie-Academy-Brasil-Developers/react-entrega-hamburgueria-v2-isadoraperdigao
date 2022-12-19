import { Link } from "react-router-dom"
import { FormInput } from "../../../components/FormInput"
import { GrayButton } from "../../../components/GrayButton"
import { StyledFormContainer } from "../../../styles/formContainer"
import { StyledTitle } from "../../../styles/typography"
import { StyledRegisterFormHeader, StyledRegisterSpan } from "./style"

export const RegisterForm = () => {
    return (
        <StyledFormContainer>
            <StyledRegisterFormHeader>
                <StyledTitle>Cadastro</StyledTitle>
                <Link to={"/"}>
                    <StyledRegisterSpan>Retornar para o login</StyledRegisterSpan>
                </Link>
            </StyledRegisterFormHeader>
            <FormInput text="Nome" type="text" />
            <FormInput text="Email" type="email" />
            <FormInput text="Senha" type="password" />
            <FormInput text="Confirmar senha" type="password" />
            <GrayButton text="Cadastrar" isDashboard={false} type="submit" />
        </StyledFormContainer>
    )
}