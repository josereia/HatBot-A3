import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: ${({ theme }) => theme.metrics.padding};
    padding-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ChatContainer = styled.main`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
`

export const Footer = styled.footer`
    width: 100%;
`