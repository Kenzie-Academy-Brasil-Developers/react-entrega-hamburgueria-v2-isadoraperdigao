import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import {toast} from "react-toastify"

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
    user: iDataLoginParameter | null;
    loading: boolean;
}

export const UserContext = createContext({} as iUserProviderValue)

export const UserProvider = ({children} : iUserProviderProps) => {
    const [user, setUser] = useState<iDataLoginParameter | null>(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")

    useEffect(() => {
        const loadUser = async () => {
            

            if(!token) {
                setLoading(false)
                return 
            }

            try {
                const {data} = await api.get(`users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setUser(data)

            } catch (error) {
                localStorage.removeItem("@TOKEN")
            } finally {
                setLoading(false)
            }
        }
        loadUser()

    }, [])

    const userLogin = async (FormData: iDataLoginParameter) => {
        try {
            const responseLogin = await api.post("login", FormData)
            const {accessToken, user: userResponse} = await responseLogin.data;

            localStorage.setItem("@TOKEN", accessToken)
            localStorage.setItem("@USERID", userResponse.id)
            setUser(userResponse)

            toast.success("Login realizado com sucesso")

            navigate("/dashboard")
            
        } catch (error: any) {
            toast.error(error.response.data)
        }
    }

    const userRegister = async (FormRegisterData: iDataRegisterParameter) => {
        try {
            const responseRegister = await api.post("users", FormRegisterData)

            toast.success("Registro realizado com sucesso!")
            
            navigate("/")
            
        } catch (error: any) {
            toast.error(error.response.data)
        }

    }


    return (
        <UserContext.Provider value={{userLogin, userRegister, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}