import { Banner, Container, Content} from "./styles";

export function Home() {
    return (
        <main>
        <Banner>
            <h1>Bem-Vindo(a)!</h1>
        </Banner>
        <Container>
            <Content>
                <div>Carrossel Categorioas</div>
                <div>Carrossel Produtos</div>
            </Content>
        </Container>
        </main>
    );
}