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
    filteredProducts: iProducts[];
    setFilteredProduct: React.Dispatch<React.SetStateAction<iProducts[]>>;
    updateSavedCart: (newCart : iProductInCart[]) => void;
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
    const [filteredProducts, setFilteredProduct] = useState([] as iProducts[])

    if(cart.length === 0) {
        const savedCart = localStorage.getItem("@CART")

        if(savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }

    const getProducts = async () => {
        const responseProducts = await api.get("products", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        
        setProducts(responseProducts.data)
        setFilteredProduct(responseProducts.data)
    }
    
    if(products.length === 0 && token) getProducts()

    const addProductToCart = (product : iProducts) => {
        if(!cart.some(productInCart => productInCart.product.id === product.id)) {
            const newCart = [...cart, {product, amount: 1}]

            updateSavedCart(newCart)
            setCart(newCart)

            setFilteredProduct(products)

            toast.success(`${product.name} adicionado ao carrinho!` )
        } else {
            toast.error("Produto já adicionado")
        }
    }

    const updateSavedCart = (newCart : iProductInCart[]) => {

        if(newCart.length > 0) {
            localStorage.setItem("@CART", JSON.stringify(newCart))
        } else {
            localStorage.removeItem("@CART")
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
            filteredProducts,
            setFilteredProduct,
            updateSavedCart
            }}>

            {children}
            
        </ProductsContext.Provider>
    )
}