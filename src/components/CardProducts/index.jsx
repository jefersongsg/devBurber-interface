
import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';


export function CardProducts({ products }) {
    const { putProductInCart } = useCart();
    return (
        <Container>
            <CardImage src={products.url} alt={products.name} />
            <div>
                <p>{products.name}</p>
                <strong>{products.currencyValue}</strong>
            </div>
            <CartButton onClick={ () => putProductInCart(products)}></CartButton>
        </Container>
    )
}
CardProducts.propTypes = {
    children: PropTypes.string,
};