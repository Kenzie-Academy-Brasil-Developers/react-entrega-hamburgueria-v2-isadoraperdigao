import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { DashboardHeader } from "../../components/DashboardHeader"
import { UserContext } from "../../providers/UserContext"

export const DashboardPage = () => {
    const {user, loading} = useContext(UserContext)

    if(loading) {
        return null;
    }

    if(user) {
        return (
            <DashboardHeader />
        )
    } else {
        return <Navigate to={"/"}/>
    }
}