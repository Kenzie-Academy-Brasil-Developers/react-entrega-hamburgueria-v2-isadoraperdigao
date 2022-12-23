import { FormAside } from "../../components/FormAside"
import { RegisterForm } from "./RegisterForm"
import { StyledRegisterPage } from "./style"

export const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <div className="registerPageContainer">
                <FormAside />
                <RegisterForm />
            </div>
        </StyledRegisterPage>
    )
}