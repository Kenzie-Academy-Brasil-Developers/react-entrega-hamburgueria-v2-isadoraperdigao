import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { CartModal } from "../../components/CartModal"
import { DashboardHeader } from "../../components/DashboardHeader"
import { ProductsList } from "../../components/ProductsList"
import { SelectedProductCard } from "../../components/SelectedProductCard"
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
                <CartModal />
            </>

        )
    } else {
        return <Navigate to={"/"}/>
    }
}