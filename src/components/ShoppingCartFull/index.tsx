import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { StyledShoppingCart } from "../../styles/shoppingCart"
import { StyledShoppingCartHeader } from "../../styles/shoppingCartHeader"
import { CartValueResult } from "../CartValueResult"
import { SelectedProductsList } from "../SelectedProductsList"

export const ShoppingCartFull = () => {
    const {setShowModal} = useContext(ProductsContext)

    return (
        <StyledShoppingCart>
            <StyledShoppingCartHeader>
                <h2>Carrinho de Compras</h2>
                <span onClick={() => setShowModal(false)}>X</span>
            </StyledShoppingCartHeader>
            <SelectedProductsList />
            <CartValueResult />
        </StyledShoppingCart>
    )
}