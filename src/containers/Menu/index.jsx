
import { useEffect, useState } from 'react';
import { Banner, ButtonReturn, CategoriaButton, CategoryMenu, Container, ProductsContainer, } from './styles'
import { api } from '../../services/api';
import { CardProducts } from '../../components/CardProducts';
import { formatPrice } from '../../utils/formatPrice'
import { ArrowFatLeft } from '@phosphor-icons/react'

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

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
                    <CategoriaButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => { setActiveCategory(category.id) }}
                    >
                        {category.name}
                    </CategoriaButton>
                ))}

                <ButtonReturn to={'/'}>
                    <ArrowFatLeft color='#61a120' weight='fill' size={20} />
                    Voltar
                </ButtonReturn>
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProducts products={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>

    );
} 