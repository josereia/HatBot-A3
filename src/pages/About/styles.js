import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: ${({ theme }) => theme.metrics.padding};
    padding-top: 76px;
`

export const Text = styled.p`
    margin-bottom: 32px;
`

export const Title = styled.h2`
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
`

export const Contributors = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 24px;
`

export const ContributorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContributorName = styled.h3`
    font-size: 14px;
`

export const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`