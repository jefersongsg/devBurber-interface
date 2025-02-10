
import { CategoriesCarousel, OffersCarousel } from '../../components';

import { Banner, ContainerCarousel } from './styles';

export function Home() {
     
    return (
        <>
        <Banner>
            <h1>Bem-Vindo(a)!</h1>
        </Banner>
        <ContainerCarousel>
            <div>
                <CategoriesCarousel/>
                <OffersCarousel/>
            </div>
        </ContainerCarousel>
        </>
    );
}