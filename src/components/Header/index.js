import React from "react";
import { Container, ProfilePic, Title } from "./styles";

export default function Header(props) {
    return (
        <Container>
            <ProfilePic src={require("../../assets/logo.png")} />
            <Title>{props.title}</Title>
        </Container>
    )
}