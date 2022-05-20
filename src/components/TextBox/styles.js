import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    float: ${({ direction }) => direction === "left" ? "left" : "right"};
    margin-bottom: ${({ theme }) => theme.metrics.padding};
    clear: both;
`

export const Icon = styled.div`
    display: ${({ direction }) => direction === "left" ? "flex" : "none"};
    border-radius: 25px;
    width: 28px;
    height: 28px;
    background-color:${({theme}) => theme.colors.card};
    padding: 5px;
    margin-right: ${({theme}) => theme.metrics.margin}
`

export const TextContainer = styled.div`
    min-width: 80px;
    min-height: 50px;
    max-width: 80%;
    padding: ${({ theme }) => theme.metrics.padding};
    border: solid 1px ${({ theme, direction }) => direction === "left" ? theme.colors.card_shadow : theme.colors.primary_shadow};
    border-radius: ${({ theme }) => theme.metrics.padding};
    border-top-left-radius: ${({ theme, direction }) => direction === "left" ? "0px" : theme.metrics.padding};
    border-top-right-radius: ${({ theme, direction }) => direction === "right" ? "0px" : theme.metrics.padding};
    background-color: ${({ theme, direction }) => direction === "left" ? theme.colors.card : theme.colors.primary};
    color: ${({ theme, direction }) => direction === "left" ? theme.colors.text : theme.colors.textContrast};
`

export const Text = styled.p`
    width: inherit;
    height: 100%;
    white-space: normal;
`