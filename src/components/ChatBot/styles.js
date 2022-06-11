import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props) => props.visible ? "flex" : "none !important"};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: ${({ theme }) => theme.metrics.padding};
    border-top-right-radius: ${({ theme }) => theme.metrics.padding};
    backdrop-filter: blur(50px);
    background-color: ${({ theme }) => theme.colors.background};
    @media(max-width: 600px) {
        border-radius: 0;
    };
`

export const ChatContainer = styled.main`
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.metrics.padding};
    padding-top: calc(60px + ${({ theme }) => theme.metrics.padding});
    position: relative;
    overflow-y: auto;
`

export const Footer = styled.footer`
    width: 100%;
    padding: ${({ theme }) => theme.metrics.padding};
`