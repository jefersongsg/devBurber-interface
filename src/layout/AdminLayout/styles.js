
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, 320px) 1fr;

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 95vh;
        background-color: ${(props) => props.theme.secondWhite};
        overflow-y: auto;
    }

    section {
        margin: auto;
        padding: 40px 20px;
        max-width: 1200px;
        width: 100%;
    }
`;