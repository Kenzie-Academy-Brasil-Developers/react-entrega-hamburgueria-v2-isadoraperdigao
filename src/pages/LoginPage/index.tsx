import { LoginForm } from "./LoginForm"
import { StyledLoginPage } from "./style"
import { FormAside } from "../../components/FormAside"

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <div className="LoginPageContainer">
                <FormAside />
                <LoginForm />
            </div>
        </StyledLoginPage>
    )
}