
import PropTypes from "prop-types"
import { CardImage, Container } from "./styles";
import { CartButton } from "../CartButton";


export function CardProducts({ products }) {

    return (
        <Container>
            <CardImage src={products.url} alt={products.name} />
            <div>
                <p>{products.name}</p>
                <strong>{products.currencyValue}</strong>
            </div>
            <CartButton></CartButton>
        </Container>
    )
}
CardProducts.propTypes = {
    children: PropTypes.string,
};