import { GrayButton } from "../GrayButton";
import { StyledCard } from "./syle"

interface iProductCardProps {
   product: {
        id: number;
        name: string;
        category: string;
        price: number;
        img: string;
    }
}

export const ProductCard = ({product} : iProductCardProps) => {
    return (
        
        <StyledCard >
            <img src={product.img} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <span>{product.category}</span>
                <p>{product.price.toFixed(2)}</p>
                <GrayButton text="Adicionar" isDashboard={true} type="button" />
            </div>
        </StyledCard>
        
    )
}