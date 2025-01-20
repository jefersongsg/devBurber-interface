
import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./styles";

import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

export function Header() {

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color='#ffffff' size={24} />
                        <div>
                            <p>
                                <span>Olá, Jeferson</span>
                            </p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCart color='#ffffff' size={24} />
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}