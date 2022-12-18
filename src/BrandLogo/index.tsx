import LogoSVG from "../assets/img/BrandLogo.svg"
import { StyledBrandLogo } from "./style";

export interface iBrandLogoProps {
    isDashboard : boolean;
}

export const BrandLogo = ({isDashboard} : iBrandLogoProps) => {
    return (
        <StyledBrandLogo isDashboard={isDashboard} src={LogoSVG} alt="Logo Burguer Kenzie" />
    )
}