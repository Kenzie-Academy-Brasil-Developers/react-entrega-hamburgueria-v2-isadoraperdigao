import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StringLiteralType } from "typescript";
import { api } from "../api/api";

interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iDataLoginParameter {
    email: string;
    password: string;
}

export interface iDataRegisterParameter {
    name: string;
    email: string;
    password: string;
}

interface iUserProviderValue  {
    userLogin: SubmitHandler<iDataLoginParameter>;
    userRegister: SubmitHandler<iDataRegisterParameter>;
}

export const UserContext = createContext({} as iUserProviderValue)

export const UserProvider = ({children} : iUserProviderProps) => {
    const [user, setUser] = useState<iDataLoginParameter | null>(null)
    const navigate = useNavigate()

    const userLogin = async (FormData: iDataLoginParameter) => {
        try {
            const responseLogin = await api.post("login", FormData)
            const {accessToken, user: userResponse} = await responseLogin.data;

            localStorage.setItem("@TOKEN", accessToken)
            setUser(userResponse)
        } catch (error) {
            console.log(error)
        }
    }

    const userRegister = async (FormRegisterData: iDataRegisterParameter) => {
        const responseRegister = await api.post("users", FormRegisterData)
        console.log(responseRegister)
        console.log("ok")
    }


    return (
        <UserContext.Provider value={{userLogin, userRegister}}>
            {children}
        </UserContext.Provider>
    )
}