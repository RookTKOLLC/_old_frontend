import styled from '@emotion/styled'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr min(80ch, calc(100% - 64px)) 1fr;
    grid-column-gap: 32px;
    & > *{
        grid-column: 2;
    }
`;