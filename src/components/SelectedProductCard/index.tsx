import { iProductInCart, iProducts, ProductsContext } from "../../providers/ProductsContext"
import { StyledSelectedProductCard } from "./style"
import trashIcon from "../../assets/img/trashIcon.svg"
import { useContext } from "react"

interface iSelectedProductCardProps {
    selectedProduct: iProductInCart
}

export const SelectedProductCard = ({selectedProduct} : iSelectedProductCardProps) => {
    const {cart, setCart, updateSavedCart} = useContext(ProductsContext)

    const addRepeatedItemToCart = (product : iProducts) => {
        setCart(cart.map(productInCart => {
            if(productInCart.product.id === product.id) {
                productInCart.amount += 1
            }

            return productInCart
        }))
    }

    const removeRepeatedItemFromCart = (product : iProducts) => {
        const newCart = cart.map(productInCart => {
            if(productInCart.product.id === product.id) {
                productInCart.amount -= 1
            } 

            return productInCart
        }).filter(productInCart => productInCart.amount > 0)

        updateSavedCart(newCart)
        setCart(newCart)
    }

    const removeItemFromCart = (product : iProducts) => {
        const newCart = cart.filter(productInCart => productInCart.product.id !== product.id)

        updateSavedCart(newCart)
        setCart(newCart)

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