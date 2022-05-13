import styles from "styled-components";

export const Container = styles.header`
    width: 100%;
    height: 80px;
    padding: ${({ theme }) => theme.metrics.padding};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: solid 1px #eee;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
`

export const Title = styles.h1`
    font-size: 24px;
`

export const ProfilePic = styles.img`
    width: 50px;
    height: 50px;
    margin-right:  ${({ theme }) => theme.metrics.padding};
    border-radius: 50px;
`