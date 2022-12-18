import { iButtonProps } from "../../entities/iButtonProps"
import { StyledGrayButton } from "./style"

export const GrayButton = ({text, callback, isDashboard, type} : iButtonProps) => {
    return (
        <StyledGrayButton onClick={callback} isDashboard={isDashboard} type={type}>{text}</StyledGrayButton>
    )
}