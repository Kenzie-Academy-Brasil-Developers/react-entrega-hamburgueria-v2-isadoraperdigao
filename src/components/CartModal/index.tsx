import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { StyledModalContainer } from "../../styles/modalContainer"
import { ShoppingCartEmpty } from "../ShoppingCartEmpty"
import { ShoppingCartFull } from "../ShoppingCartFull"

export const CartModal = () => {
    const {cart, showModal} = useContext(ProductsContext)

    const cartToShow = cart.length > 0 ? <ShoppingCartFull /> : <ShoppingCartEmpty /> 
    if(showModal) {
        return (
            <StyledModalContainer>
                {cartToShow}
            </StyledModalContainer>
        )
    } 

    return <></>
    
}