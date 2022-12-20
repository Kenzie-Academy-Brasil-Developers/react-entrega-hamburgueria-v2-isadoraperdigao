import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsContext"
import { ProductCard } from "../ProductCard"
import { StyledProductsList } from "./style"

export const ProductsList = () => {
    const {products} = useContext(ProductsContext)

    const productsLi = products.map(product => <ProductCard product={product} key={product.id} />)

    return (
        <StyledProductsList>
            {productsLi}
        </StyledProductsList>
    )
}