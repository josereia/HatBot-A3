import { useState, useEffect } from "react";
import { Header, TextInput, TextBox } from "../../components"
import { ChatContainer, Container, Footer } from "./styles";

export default function Home() {
    const [message, setmessage] = useState([{
        bot: true,
        text: "Olá tudo bem? No que que posso lhe ajudar?"
    }])
    const [addMessageKey, setAddMessageKey] = useState(0)
    const [botKey, setBotKey] = useState(0)
    // const chat = [
    //     {
    //         bot: true,
    //         text: "Olá tudo bem? No que ue posso lhe ajudar"
    //     },
    //     {
    //         bot: true,
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         bot: true,
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd"
    //     },
    //     {
    //         bot: true,
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         bot: true,
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         bot: true,
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd sçlnc dk  dkcpçpdçodçkcdpjç sdcc"
    //     },
    //     {
    //         user: "user",
    //         text: "cdlkiçscndsçldd"
    //     },
    // ]

    const handleAddMessage = (value) => {
        const userMessage = {
            user: "user",
            text: value
        }

        message.push(userMessage)
        setmessage(message)
        setAddMessageKey(addMessageKey + 1)

        setTimeout(() => {
            setBotKey(botKey + 1)
        }, 1000)
    }


    useEffect(() => {
        if (botKey > 0) {
            const botMessage = {
                bot: true,
                text: '...'
            }
            message.push(botMessage)
            setmessage(message)
            setAddMessageKey(addMessageKey + 1)
        }
    }, [botKey]);

    return (
        <Container>
            <Header title="HatBot" />
            <ChatContainer>
                {
                    message.map(item => (
                        <TextBox text={item.text} direction={item.bot ? "left" : "right"} />
                    ))
                }
            </ChatContainer>
            <Footer>
                <TextInput placeholder="Pergunte o que queira saber..." {...{ handleAddMessage }} />
            </Footer>
        </Container>
    );
}