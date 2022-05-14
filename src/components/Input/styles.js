import styles from "styled-components";

export const Container = styles.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors.card_shadow};
    background-color: ${({ theme }) => theme.colors.card};
`

export const Input = styles.input`
    height: 100%;
    padding-left: 16px;
    border: none;
    outline: none;
    background-color: transparent;
`

export const SendButton = styles.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors.card_shadow};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textContrast};
    transition: all 0.4s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    };
    &:active{
        transform: scale(1.2);
        background-color: ${({ theme }) => theme.colors.primary_shadow};
    }
`