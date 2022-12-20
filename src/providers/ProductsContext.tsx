import { createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { UserContext } from "./UserContext";

interface iProductsProviderProps {
    children: React.ReactNode;
}

interface iProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface iProductsProviderValue {
    products: iProducts[]
}

export const ProductsContext = createContext({} as iProductsProviderValue)

export const ProductsProvider = ({children} : iProductsProviderProps) => {
    const {token} = useContext(UserContext)

    const [products, setProducts] = useState([] as iProducts[])
    const [counter, setCounter] = useState(0)

    const getProducts = async () => {
        const responseProducts = await api.get("products", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        
        setProducts(responseProducts.data)
    }
    
    if(products.length === 0) getProducts()


    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}