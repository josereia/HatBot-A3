import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
`

export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    margin-right:  ${({ theme }) => theme.metrics.padding};
    border-radius: 50px;
`