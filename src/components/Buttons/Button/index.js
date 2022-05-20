import React from "react"
import Icon from "../../Icon"
import { Container, Text } from "./styles"

export default function Button(props) {
    return (
        <Container {...props}>
            <Icon icon={props.icon} />
            <Text>{props.children}</Text>
        </Container>
    )
}