import React from "react";
import { Header, TextInput, TextBox, Modal } from "../../components"
import { ChatContainer, Container, Footer } from "./styles";

export default function Home() {
    const chat = [
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd"
        },
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            bot: true,
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
        },
        {
            user: "user",
            text: "cdlkiçscndsçldd"
        },
    ]


    return (
        <Container>
            <Header title="HatBot" />
            <ChatContainer>
                {
                    chat.map(item => (
                        <TextBox text={item.text} direction={item.bot ? "left" : "right"} />
                    ))
                }
            </ChatContainer>
            <Footer>
                <TextInput placeholder="Pergunte o que queira saber..." />
            </Footer>

            <Modal />
        </Container>
    );
}