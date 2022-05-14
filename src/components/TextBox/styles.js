import styled from "styled-components";

export const Container = styled.div`
    min-width: 80px;
    min-height: 50px;
    max-width: 80%;
    float: ${({ direction }) => direction === "left" ? "left" : "right"};
    padding: ${({ theme }) => theme.metrics.padding};
    margin-bottom: ${({ theme }) => theme.metrics.padding};
    border: solid 1px ${({ theme, direction }) => direction === "left" ? theme.colors.card_shadow : theme.colors.primary_shadow};
    border-radius: ${({ theme }) => theme.metrics.padding};
    border-top-left-radius: ${({ theme, direction }) => direction === "left" ? "0px" : theme.metrics.padding};
    border-top-right-radius: ${({ theme, direction }) => direction === "right" ? "0px" : theme.metrics.padding};
    background-color: ${({ theme, direction }) => direction === "left" ? theme.colors.card : theme.colors.primary};
    color: ${({ theme, direction }) => direction === "left" ? theme.colors.text : theme.colors.textContrast};
    clear: both
    `

export const Text = styled.p`
    height: 100%;
`