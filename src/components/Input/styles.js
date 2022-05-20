import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors.card_shadow};
    background-color: ${({ theme }) => theme.colors.card};
`

export const Input = styled.input`
    width: 80%;
    height: 100%;
    padding: 0 ${({ theme }) => theme.metrics.padding};
    border: none;
    outline: none;
    background-color: transparent;
`