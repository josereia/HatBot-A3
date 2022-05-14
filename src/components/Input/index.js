import React from "react";
import Icon from "../Icon";
import { Container, Input, SendButton } from "./styles";

export default function TextInput(props) {
    return (
        <Container>
            <Input type="text" {...props}/>
            <SendButton>
                <Icon icon="send" />
            </SendButton>
        </Container>
    )
}