import styled from "styled-components"

export const Container = styled.main`
    
`

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0px 100px;
    @media(max-width: 600px) {
        padding: 100px 16px;
    };
`

export const Section1 = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin-bottom: 24px;
        font-size: 64px;
        font-weight: 900;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
    };
    p {
        font-size: 20px;
        margin-bottom: calc(24px * 2);
    };
    @media(max-width: 600px) {
        flex-direction: column;
        gap: 24px;
    };
`

export const LeftContainer = styled.div`
    width: 536px;
    @media(max-width: 600px) {
        width: 100%;
        h1 {
            font-size: 48px;
        }
    };
`

export const ButtonsContainer = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
    @media(max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.metrics.padding};
    };
`

export const Button = styled.button`
    width: 260px;
    height: 60px;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;   
    cursor: pointer;
    transition: 0.4s all;
    outline: none;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    };
    &:active{
        transform: scale(1.2);
        background-color: ${({ theme }) => theme.colors.primary_shadow};
    }
 
`

export const RightContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media(max-width: 600px) {
        justify-content: center;
    };
`

export const BlurCircle = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    top: 200;
    border-radius: 50%;
    filter: blur(200px);
    background: linear-gradient(to bottom right, #EC164E, #2290FB);
    opacity: 0.8;
    z-index: -1;
    @media(max-width: 600px) {
        width: 260px;
        height: 260px;
    };
`

export const ImageContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    img {
        height: 800px;
    }
    @media(max-width: 600px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        img {
            height: 400px;
        }
    };
`

export const SocialButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media(max-width: 600px) {
        display: none;
    };
`

export const CircleButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    backdrop-filter: blur(50px);
    background-color: rgba(255,255,255,0.9);
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
        transform: scale(1.02);
    };
`