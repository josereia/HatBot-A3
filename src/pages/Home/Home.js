import React from "react";
import { Header, TextInput } from "../../components"
import { ChatContainer, Container, Footer } from "./styles";

export default function Home() {
    return (
        <Container>
            <Header title="Use name" />
            <ChatContainer>
                d
            </ChatContainer>
            <Footer>
                <TextInput placeholder="Pergunte o que queira saber..." />
            </Footer>
        </Container>
    );
}