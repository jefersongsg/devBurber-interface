
import ImgLogo from '../../assets/logo.svg'
import { Logout } from '../Header/styles';
import { Container } from './styles';
import { ButtonAdm } from '../../components';
import { Basket, ClipboardText, ShoppingCartSimple, SignOut } from '@phosphor-icons/react'

export function SideNavAdmin() {
    return (
        <Container>
            <img src={ImgLogo} alt='Devburger-logo'/>
           <ButtonAdm > <ClipboardText size={32}/>  Pedidos</ButtonAdm>
            <ButtonAdm> <Basket size={32} /> Produtos</ButtonAdm>
            <ButtonAdm> <ShoppingCartSimple size={32} /> Adicionar produtos</ButtonAdm>
            <Logout> <SignOut size={32} /> Sair</Logout>
        </Container>
    );
}