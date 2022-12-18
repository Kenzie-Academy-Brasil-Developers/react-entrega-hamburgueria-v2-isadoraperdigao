import { BrandLogo } from "../BrandLogo"
import { Slogan } from "../Slogan"
import EllipsesGroup from "../../assets/img/Ellipses.svg" 
import { StyledFormAside } from "./style"

export const FormAside = () => {
    return (
        <StyledFormAside>
            <BrandLogo isDashboard={false}/>
            <Slogan />
            <img src={EllipsesGroup} alt="Conjunto de 18 círculos formando um retângulo" className="ellipsesGroup"/>
        </StyledFormAside>
    )
}