import { LoginForm } from "./LoginForm"
import { StyledLoginPage } from "./style"
import { FormAside } from "../../components/FormAside"
import { Link } from "react-router-dom"
import { GrayButton } from "../../components/GrayButton"
import { StyledFormParagraph } from "./LoginForm/style"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <div className="loginPageContainer">
                <FormAside />
                <div className="formContainer">
                <LoginForm />
                <StyledFormParagraph>Crie sua conta para saborear muitas delícias e matar sua fome!</StyledFormParagraph>
                    <Link to={"/register"}>
                        <GrayButton text="Cadastrar" isDashboard={false} type="button" />
                    </Link>
                </div>
            </div>
        </StyledLoginPage>
    )
}