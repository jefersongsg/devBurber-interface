
import { Button } from '../index'
import { Container } from './styles';
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const { cartProducts, clearCart } = useCart();

    useEffect(() => {
        const sumAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        },0);

        setFinalPrice(sumAllItens);
    },[cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {id: product.id, quantity: product.quantity };
    });
};

    return(
        <div>
        <Container>
            <div className='container-top'>
                <h2 className='title'>Resumo do Pedido</h2>
                <p className='itens'>itens</p>
                <p className='iten-price'>{formatPrice(finalPrice)}</p>
                <p className='delivery-tax'>Taxa de Entrega</p>
                <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
            </div>
            <div className='container-bottom'>
                <p>Total</p>
                <p>{formatPrice(finalPrice + deliveryTax)}</p>
            </div>
        </Container>
        <Button>Finalizar Pedido</Button>
        </div>
    );
}
