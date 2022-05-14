import React from "react"

import { Container, Text } from "./styles"

export default function TextBox(props) {
    return (
        <Container direction={props.direction}>
            <Text>{props.text}</Text>
        </Container>
    )
}