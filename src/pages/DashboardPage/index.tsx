import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { DashboardHeader } from "../../components/DashboardHeader"
import { ProductsList } from "../../components/ProductsList"
import { UserContext } from "../../providers/UserContext"

export const DashboardPage = () => {
    const {user, loading} = useContext(UserContext)

    if(loading) {
        return null;
    }

    if(user) {
        return (
            <>
                <DashboardHeader />
                <ProductsList />
            </>

        )
    } else {
        return <Navigate to={"/"}/>
    }
}