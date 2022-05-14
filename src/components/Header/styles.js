import styled from "styled-components";

<<<<<<< HEAD
export const Container = styles.header`
    max-width: calc(100% - 32px);
    height: 60px;
    padding: 16px;
=======
export const Container = styled.header`
    width: 100%;
    height: 80px;
    padding: ${({ theme }) => theme.metrics.padding};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
>>>>>>> front
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: solid 1px #eee;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
`

export const Title = styled.h1`
    font-size: 24px;
`

export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    margin-right:  ${({ theme }) => theme.metrics.padding};
    border-radius: 50px;
`