import { StyledSlogan } from "./style"
import shoppingBag from "../../assets/img/shopping-bag.svg"

export const Slogan = () => {
    return (
        <StyledSlogan>
            <div>
                <img src={shoppingBag} alt="Ícone de bolsa de mão" />
            </div>
            <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
        </StyledSlogan>
    )
}