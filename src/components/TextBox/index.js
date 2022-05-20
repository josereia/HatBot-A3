import React from "react"
import { Container, TextContainer, Text, Icon } from "./styles"
import Logo from "../../assets/logo.png"

export default function TextBox({direction, text}) {
    return (
        <Container {...{direction}}>
            
            <Icon {...{direction}}> <img src={Logo} /> </Icon>
            <TextContainer {...{direction}}>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    )
}