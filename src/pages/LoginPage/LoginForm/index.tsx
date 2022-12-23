import { Link } from "react-router-dom"
import { StyledFormContainer } from "../../../styles/formContainer"
import { StyledForm } from "../../../styles/formStyle"
import { StyledTitle } from "../../../styles/typography"
import { BrandButton } from "../../../components/BrandButton"
import { FormInput } from "../../../components/FormInput"
import { GrayButton } from "../../../components/GrayButton"
import { StyledFormParagraph } from "./style"
import { useContext } from "react"
import { iDataLoginParameter, UserContext } from "../../../providers/UserContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"

export const LoginForm = () => {
    const {userLogin} = useContext(UserContext)
    const {register, handleSubmit, formState: {errors}} = useForm<iDataLoginParameter>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur",
    })

    return (
        <StyledFormContainer onSubmit={handleSubmit(userLogin)}>
            <StyledTitle>Login</StyledTitle>
            <StyledForm>
                <FormInput text="Email" type="text" {...register("email")}/>
                {errors.email && <p>{errors.email.message}</p>}
                <FormInput text="Senha" type="password" {...register("password")}/>
                {errors.password && <p>{errors.password.message}</p>}
                <BrandButton text="Logar" isDashboard={false} type="submit" />
                <StyledFormParagraph>Crie sua conta para saborear muitas delícias e matar sua fome!</StyledFormParagraph>
                    <Link to={"/register"}>
                        <GrayButton text="Cadastrar" isDashboard={false} type="button" />
                    </Link>
            </StyledForm>
        </StyledFormContainer>
    )
}