import React from "react"
import { useNavigate } from 'react-router-dom'
import Icon from "../Icon";

import { BackButton, Container, Title, LeftContainer, RightContainer, ProfilePic } from "./styles"

export default function Header(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <LeftContainer>
                {
                    props.backButton &&
                    <BackButton onClick={() => navigate(-1)}>
                        <Icon icon="arrow-left" />
                    </BackButton>
                }
                {
                    props.profilePic &&
                    <ProfilePic src={props.profilePic} />
                }
                <Title>{props.title}</Title>
            </LeftContainer>
            {
                props.children &&
                <RightContainer>
                    {props.children}
                </RightContainer>
            }
        </Container>
    )
}