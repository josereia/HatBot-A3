import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 60px;
    padding: ${({ theme }) => theme.metrics.padding} 100px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h1`
    font-size: 24px;
`

export const Chat = styled.div`
    width: 360px;
    height: 50px;
    padding: ${({ theme }) => theme.metrics.padding};
    position: fixed;
    bottom: 0;
    right: 100px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    backdrop-filter: blur(50px);
    background: linear-gradient(to right, rgba(109,85,255,0.9), rgba(236,22,78,0.9));
    color: white;
    div {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background-color: white;
    };
    img {
        width: 30px;
        height: 30px;
    };
    p {
        font-weight: bold;
    };
`