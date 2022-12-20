import { StyledShoppingCart } from "../../styles/shoppingCart"
import { StyledShoppingCartHeader } from "../../styles/shoppingCartHeader"
import { StyledShoppingCartEmpty } from "./style"

export const ShoppingCartEmpty = () => {
    return (
        <StyledShoppingCart>
            <StyledShoppingCartHeader>
                <h2>Carrinho de Compras</h2>
                <span>X</span>
            </StyledShoppingCartHeader>
            <StyledShoppingCartEmpty>
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
            </StyledShoppingCartEmpty>
        </StyledShoppingCart>
    )
}