import styled from "styled-components";

export const Container = styled.main`
    
`

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0px 100px;
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
`

export const Button = styled.button`
    width: 260px;
    height: 60px;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    background-color: #EC164E;
    color: white;   
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
        transform: scale(1.02);
    };
`

export const BlurCircle = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    top: 200px;
    border-radius: 50%;
    filter: blur(200px);
    background: linear-gradient(to bottom right, #EC164E, #2290FB);
    opacity: 0.8;
    z-index: -1;
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