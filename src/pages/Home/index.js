import React, { useState, useEffect } from "react"
import { TextInput, TextBox, Header, Icon, Link } from "../../components"

import { ChatContainer, Container, Footer } from "./styles"

export default function Home() {
    const [addMessageKey, setAddMessageKey] = useState(0)
    const [botKey, setBotKey] = useState(0)
    const [messageHistory, setMessageHistory] = useState([{
        bot: true,
        text: "Olá tudo bem? Em que que posso ajudar?"
    }])
    const [userMessage, setUserMessage] = useState({
        bot: false,
        text: ""
    })

    const handleAddMessage = () => {
        setMessageHistory(state => [...state, userMessage])
        setUserMessage({ ...userMessage, text: "" })
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

            setMessageHistory(state => [...state, botMessage])
            setAddMessageKey(addMessageKey + 1)
        }
    }, [botKey])

    return (
        <Container>
            <Header title="HatBot" profilePic={require("../../assets/logo.png")}>
                <Link to="/about">
                    <Icon icon="info" />
                </Link>
            </Header>

            <ChatContainer>
                {
                    messageHistory.map((item, index) => (
                        <TextBox key={index} text={item.text} direction={item.bot ? "left" : "right"} />
                    ))
                }
            </ChatContainer>

            <Footer>
                <TextInput
                    type="text"
                    placeholder="Pergunte o que queira saber..."
                    value={userMessage.text}
                    onChange={({ target }) => setUserMessage({ ...userMessage, text: target.value })}
                    onKeyDown={e => e.key === 'Enter' && handleAddMessage()}
                    onClick={() => handleAddMessage()}
                />
            </Footer>
        </Container>
    );
}