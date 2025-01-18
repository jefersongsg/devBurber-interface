
import { useEffect, useState } from 'react';
import { Banner, CategoryButton, CategoryMenu, Container, ProductsContainer, } from './styles'
import { api } from '../../services/api';
import { CardProducts } from '../../components/CardProducts';
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from 'react-router-dom';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setactiveCategory] = useState(0);


    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }
        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data
                .map((product) => ({
                    currencyValue: formatPrice(product.price),
                    ...product,
                }));

            setProducts(newProducts);
        }
        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory,
            );
            setFilteredProducts(newFilteredProducts)
        }
    }, [products, activeCategory]);


    return (
        <Container>
            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI!
                    <br />
                    <span>Esse cardápio está irresistível!</span>
                </h1>

            </Banner>
            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true,
                                },
                            );
                            setactiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProducts products={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>

    );
} 