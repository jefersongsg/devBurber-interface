
import { useCart } from '../../hooks/CartContext';
import { Table } from '../Table';

export function CartItens() {
    const { cartProducts, decreaseProduct, increaseProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preços</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>{cartProducts?.length ? (
                cartProducts.map(product => (
                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImage src={product.url} />
                        </Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{product.currencyValue}</Table.Td>
                        <Table.Td>{product.quantity}</Table.Td>
                        <Table.Td>
                            {formatPrice (product.quantity * product.price)}
                        </Table.Td>
                    </Table.Tr>
                ))
            ) : (
                <div>Carrinho Vazio</div>
            )}
            </Table.Body>
        </Table.Root>
    )
}