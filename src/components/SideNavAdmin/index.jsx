
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { navLinks } from './navLinks';
import { SignOut } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt='Devburger-logo' />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        $isActive={pathname === link.path}
                        to={link.path}
                    >
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to={'/login'} onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}