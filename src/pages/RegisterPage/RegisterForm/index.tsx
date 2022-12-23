import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FormInput } from "../../../components/FormInput"
import { GrayButton } from "../../../components/GrayButton"
import { iDataLoginParameter, iDataRegisterParameter, UserContext } from "../../../providers/UserContext"
import { StyledFormContainer } from "../../../styles/formContainer"
import { StyledForm } from "../../../styles/formStyle"
import { StyledTitle } from "../../../styles/typography"
import { registerSchema } from "./registerSchema"
import { StyledRegisterFormHeader, StyledRegisterSpan } from "./style"

export const RegisterForm = () => {
    const {userRegister} = useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<iDataRegisterParameter>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur",
    })


    return (
        <StyledFormContainer onSubmit={handleSubmit(userRegister)}>
            <StyledRegisterFormHeader>
                <StyledTitle>Cadastro</StyledTitle>
                <Link to={"/"}>
                    <StyledRegisterSpan>Retornar para o login</StyledRegisterSpan>
                </Link>
            </StyledRegisterFormHeader>
            <StyledForm>
                <FormInput text="Nome" type="text" {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
                <FormInput text="Email" type="email" {...register("email")} />
                {errors.email && <p>{errors.email.message}</p>}
                <FormInput text="Senha" type="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                <FormInput text="Confirmar senha" type="password" />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <GrayButton text="Cadastrar" isDashboard={false} type="submit" />
            </StyledForm>
        </StyledFormContainer>
    )
}