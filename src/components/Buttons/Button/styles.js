import styled from "styled-components"

export const Container = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: ${props => props.inverted ? "row-reverse" : "row"};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors.card_shadow};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textContrast};
    transition: all 0.4s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    };
    &:active{
        transform: scale(1.2);
        background-color: ${({ theme }) => theme.colors.primary_shadow};
    }
`

export const Text = styled.p`
    margin: 0 ${({theme}) => theme.metrics.padding};
    font-size: 18px;
    font-weight: bold;
`