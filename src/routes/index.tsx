import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}