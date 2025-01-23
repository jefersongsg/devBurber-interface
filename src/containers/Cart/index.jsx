
import Logo from '../../assets/logo.svg'
import { Banner, Container, Content, Title } from './styles';
import { CartItens, CartResume } from '../../components/index';


export function Cart() {
    return(
        <Container>
            <Banner>
                <img src={Logo} alt='logo devburger'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItens/>
                <CartResume/>
            </Content>
        </Container>
    );
}