import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { ProductCard } from "../ProductCard"
import { StyledProductsList } from "./style"

export const ProductsList = () => {
    const { filteredProducts} = useContext(ProductsContext)

    const productsLi = filteredProducts.map(product => <ProductCard product={product} key={product.id} />)

    return (
        <StyledProductsList>
            {productsLi}
        </StyledProductsList>
    )
}