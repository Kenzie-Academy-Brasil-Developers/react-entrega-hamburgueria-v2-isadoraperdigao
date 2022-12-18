import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />}/>
        </Routes>
    )
}