import { createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify"

interface iProductsProviderProps {
    children: React.ReactNode;
}

export interface iProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface iProductsProviderValue {
    products: iProducts[];
    addProductToCart: (product : iProducts) => void;
    cart: iProductInCart[];
    setCart: React.Dispatch<React.SetStateAction<iProductInCart[]>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iProductInCart {
    product: iProducts;
    amount: number;
}

export const ProductsContext = createContext({} as iProductsProviderValue)

export const ProductsProvider = ({children} : iProductsProviderProps) => {
    const {token} = useContext(UserContext)

    const [products, setProducts] = useState([] as iProducts[])
    const [cart, setCart] = useState([] as iProductInCart[])
    const [showModal, setShowModal] = useState(false)

    const getProducts = async () => {
        const responseProducts = await api.get("products", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        
        setProducts(responseProducts.data)
    }
    
    if(products.length === 0 && token) getProducts()

    const addProductToCart = (product : iProducts) => {
        if(!cart.some(productInCart => productInCart.product.id === product.id)) {
            setCart([...cart, {product, amount: 1}])
        } else {
            toast.error("Produto já adicionado")
        }
    }


    return (
        <ProductsContext.Provider value={{
            products,
            addProductToCart, 
            cart, 
            setCart, 
            showModal, 
            setShowModal,
            }}>

            {children}
            
        </ProductsContext.Provider>
    )
}