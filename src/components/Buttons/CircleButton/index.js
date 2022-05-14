import React from "react"
import Icon from "../../Icon"
import { Container } from "./styles"

export default function CircleButton(props) {
    return (
        <Container {...props}>
            <Icon icon={props.icon} />
        </Container>
    )
}