import { StyledBrandButton } from "./style"

interface iBrandButtonProps {
    text: string;
    callback?: () => void;
    isDashboard: boolean;
    type: "button" | "submit"
}

export const BrandButton = ({text, callback, isDashboard, type} : iBrandButtonProps) => {
    return (
        <StyledBrandButton onClick={callback} isDashboard={isDashboard} type={type}>{text}</StyledBrandButton>
    )
}