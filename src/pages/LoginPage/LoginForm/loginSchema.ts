import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("O email é obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
})