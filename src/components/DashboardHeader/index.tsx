import { BrandLogo } from "../BrandLogo"
import { SearchInput } from "../SearchInput"
import { StyledDashboardHeader } from "./style"
import logoutIcon from "../../assets/img/logoutIcon.svg"
import searchIcon from "../../assets/img/searchIcon.svg"
import cartIcon from "../../assets/img/cartIcon.svg"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../../providers/ProductsContext"

export const DashboardHeader = () => {
    const [isClicked, setIsclicked] = useState(false)
    const { setShowModal, cart} = useContext(ProductsContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        navigate("/")
    }


    return (
        <StyledDashboardHeader>
            <div className="headerContainer">
                <BrandLogo isDashboard={true} />
                <div className="headerContent">
                    <SearchInput 
                    isClicked={isClicked}
                    callbackOnBlur={() => setIsclicked(false)}
                    />
                    <img
                    src={searchIcon} 
                    alt="Ícone de lupa" 
                    className="clickableImg" 
                    id="searchIcon" 
                    onClick={() => setIsclicked(true)}/>
                    <div className="shoppingCartImg">
                        <div className="shoppingCartCounter">{cart.length}</div>
                        <img src={cartIcon} alt="Ícone de carrinho de compra" className="clickableImg" onClick={() => setShowModal(true)} />
                    </div>
                    <img src={logoutIcon} alt="Ícone de logout" className="clickableImg" onClick={logout}/>
                </div>
            </div>
        </StyledDashboardHeader>
    )
}