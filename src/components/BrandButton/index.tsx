import { iButtonProps } from "../../entities/iButtonProps"
import { StyledBrandButton } from "./style"

export const BrandButton = ({text, callback, isDashboard, type} : iButtonProps) => {
    return (
        <StyledBrandButton onClick={callback} isDashboard={isDashboard} type={type}>{text}</StyledBrandButton>
    )
}