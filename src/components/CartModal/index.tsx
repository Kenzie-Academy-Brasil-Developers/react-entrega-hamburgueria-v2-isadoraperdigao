import { StyledModalContainer } from "../../styles/modalContainer"
import { ShoppingCartEmpty } from "../ShoppingCartEmpty"

export const CartModal = () => {
    return (
        <StyledModalContainer>
            <ShoppingCartEmpty />
        </StyledModalContainer>
    )
}