import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    float: ${({ direction }) => direction === "left" ? "left" : "right"};
    margin-bottom: ${({ theme }) => theme.metrics.padding};
    clear: both;
`

export const ProfilePic = styled.img`
    width: 28px;
    height: 28px;
    margin-right: ${({ theme }) => theme.metrics.margin};
    display: flex;
    border-radius: 50%;
    background-color:${({ theme }) => theme.colors.card};
`

export const TextContainer = styled.div`
    padding: ${({ theme }) => theme.metrics.padding};
    border: solid 1px ${({ theme, direction }) => direction === "left" ? theme.colors.card_shadow : theme.colors.primary_shadow};
    border-radius: ${({ theme }) => theme.metrics.padding};
    border-top-left-radius: ${({ theme, direction }) => direction === "left" ? "0px" : theme.metrics.padding};
    border-top-right-radius: ${({ theme, direction }) => direction === "right" ? "0px" : theme.metrics.padding};
    background-color: ${({ theme, direction }) => direction === "left" ? theme.colors.card : theme.colors.primary};
    color: ${({ theme, direction }) => direction === "left" ? theme.colors.text : theme.colors.textContrast};
`

export const Text = styled.p`
    width: 100%;
    height: 100%;
    white-space: break-word;
`