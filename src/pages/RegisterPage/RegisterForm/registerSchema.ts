import * as yup from "yup"

export const registerSchema = yup.object().shape({
    name: yup
    .string()
    .required("Nome de usuário é obrigatório"),
    email: yup
    .string()
    .required("Preenchimento de email obrigatório")
    .email("Formato de email inválido"),
    password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/(?=.*?[A-Z])/, "Senha deve conter ao menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Senha deve conter ao menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Senha deve conter ao menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Senha deve conter ao menos um caractere especial")
    .min(8, "A senha deve conter, no mínimo, 8 caracteres"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "A senha deve ser a igual a anterior"),
})