import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { SelectedProductCard } from "../SelectedProductCard"
import { StyledSelectedProductlist } from "./style"

export const SelectedProductsList = () => {
    const {cart} = useContext(ProductsContext)

    const SelectedProductLi = cart.map(selectedProduct => <SelectedProductCard selectedProduct={selectedProduct} key={selectedProduct.product.id}/>)

    return (
        <StyledSelectedProductlist>
            {SelectedProductLi}
        </StyledSelectedProductlist>
    )
}