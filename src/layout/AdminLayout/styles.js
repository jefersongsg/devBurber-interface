
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 340px) 1fr;

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 95vh;
        background-color: ${(props) => props.theme.secondWhite};
        overflow-y: auto;
    }

    section {
        padding: 40px 20px;
        max-width: 1200px;
        width: 100%;
    }
`;