import styled from "styled-components"
import ChatBot from '../components/ChatBot'

export const Header = styled.header`
    width: 100%;
    height: 60px;
    padding: ${({ theme }) => theme.metrics.padding} 100px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #eee;
    backdrop-filter: blur(50px);
    background-color: ${({ theme }) => theme.colors.background};
    @media(max-width: 600px) {
        padding: ${({ theme }) => theme.metrics.padding};
    };
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
    @media(max-width: 600px) {
        width: 60px;
        height: 60px;
        padding: 0px;
        bottom: ${({ theme }) => theme.metrics.padding};
        right: ${({ theme }) => theme.metrics.padding};
        flex-direction: row-reverse;
        justify-content: center;
        border-radius: 16px;
        box-shadow: 0 0 16px rgba(0,0,0,0.1);
        p {
            text-align: center;
            width: 150px;
            padding: 6px;
            position: absolute;
            right: 64px;
            border-radius: 16px;
            box-shadow: 0 0 16px rgba(0,0,0,0.1);
            background-color: white;
            color: black;
        }
    };
`

export const ChatBotComponent = styled(ChatBot)`
    width: 360px;
    height: 60%;
    position: fixed;
    bottom: 0;
    right: 100px;
    box-shadow: 0 0 16px rgba(0,0,0,0.1);
    border-radius: 50;
    z-index: 99;
    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    };
`