import { LoginForm } from "./LoginForm"
import { StyledLoginPage } from "./style"
import { FormAside } from "../../components/FormAside"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <div className="loginPageContainer">
                <FormAside />
                <LoginForm />   
            </div>
        </StyledLoginPage>
    )
}