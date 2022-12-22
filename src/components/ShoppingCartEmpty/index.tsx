import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { StyledShoppingCart } from "../../styles/shoppingCart"
import { StyledShoppingCartHeader } from "../../styles/shoppingCartHeader"
import { StyledShoppingCartEmpty } from "./style"

export const ShoppingCartEmpty = () => {
    const {setShowModal} = useContext(ProductsContext)

    return (
        <StyledShoppingCart>
            <StyledShoppingCartHeader>
                <h2>Carrinho de Compras</h2>
                <span onClick={() => setShowModal(false)}>X</span>
            </StyledShoppingCartHeader>
            <StyledShoppingCartEmpty>
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
            </StyledShoppingCartEmpty>
        </StyledShoppingCart>
    )
}