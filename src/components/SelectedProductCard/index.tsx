import { iProductInCart, iProducts, ProductsContext } from "../../providers/ProductsContext"
import { StyledSelectedProductCard } from "./style"
import trashIcon from "../../assets/img/trashIcon.svg"
import { useContext } from "react"

interface iSelectedProductCardProps {
    selectedProduct: iProductInCart
}

export const SelectedProductCard = ({selectedProduct} : iSelectedProductCardProps) => {
    const {cart, setCart} = useContext(ProductsContext)

    const addRepeatedItemToCart = (product : iProducts) => {
        setCart(cart.map(productInCart => {
            if(productInCart.product.id === product.id) {
                productInCart.amount += 1
            }

            return productInCart
        }))
    }

    const removeRepeatedItemFromCart = (product : iProducts) => {
        setCart(cart.map(productInCart => {
            if(productInCart.product.id === product.id) {
                productInCart.amount -= 1
            } 

            return productInCart
        }).filter(productInCart => productInCart.amount > 0))
    }

    const removeItemFromCart = (product : iProducts) => {
        setCart(cart.filter(productInCart => productInCart.product.id !== product.id))
    }

    return (
        <StyledSelectedProductCard>
            <div className="cardContainer">
                <div className="cardContentContainer">
                    <div className="imgContainer">
                        <img src={selectedProduct.product.img} alt={selectedProduct.product.name} />
                    </div>
                    <div>
                        <h3>{selectedProduct.product.name}</h3>
                        <div className="counter">
                            <button onClick={() => removeRepeatedItemFromCart(selectedProduct.product)}>-</button>
                            <div>{selectedProduct.amount}</div>
                            <button onClick={() => addRepeatedItemToCart(selectedProduct.product)} >+</button>
                        </div>
                    </div>
                </div>
                <button className="removeItemButton">
                    <img src={trashIcon} alt="Ícone de lixeira" onClick={() => removeItemFromCart(selectedProduct.product)} />
                </button>
            </div>
        </StyledSelectedProductCard>
    )
}