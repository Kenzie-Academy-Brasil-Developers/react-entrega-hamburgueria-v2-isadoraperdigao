import { useContext } from "react"
import { iProductInCart, ProductsContext } from "../../providers/ProductsContext"
import { GrayButton } from "../GrayButton"
import { StyledCartValueResult } from "./style"

export const CartValueResult = () => {
    const {cart, emptyCart} = useContext(ProductsContext)
    const cartValueResult = cart.reduce((previousValue, currentValue) => previousValue + currentValue.product.price * currentValue.amount, 0)
    
    return (
        <StyledCartValueResult>
            <div className="cartValue">
                <p>Total</p>
                <span>{`R$ ${(cartValueResult).toFixed(2)}`}</span>
            </div>
            <GrayButton text="Remover todos" isDashboard={false} type="button" callback={emptyCart} />
        </StyledCartValueResult>
    )
}