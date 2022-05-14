import React from "react"
import { useNavigate } from 'react-router-dom'
import Icon from "../Icon";

import { BackButton, Container, Title } from "./styles"

export default function Header(props) {
    const navigate = useNavigate();

    if (props.children) {
        return (
            <Container {...props} />
        )
    } else {
        return (
            <Container>
                <BackButton onClick={() => navigate(-1)}>
                    <Icon icon="arrow-left" />
                </BackButton>
                <Title>{props.title}</Title>
            </Container>
        )
    }
}