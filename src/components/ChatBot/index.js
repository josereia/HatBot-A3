import React, { useState, useEffect, useRef } from "react"
import { postMessage } from "../../services/chatbotAPI"

import { TextInput, TextBox, Header, Icon } from "./components"

import { ChatContainer, Container, Footer } from "./styles"

export default function ChatBot(props) {
    const chatContainerRef = useRef(null);
    const [userMessage, setUserMessage] = useState({})
    const [messageHistory, setMessageHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(true)

    async function handleAddMessage() {
        setMessageHistory(state => [...state, userMessage])
        setLoading(true)
        await postMessage(userMessage.text).then((res) => {
            if (res.data.intent === "Xingamentos") {
                console.log("xingamento")
                setTimeout(() => {
                    setVisible(false)
                }, 6000);
            }
            for (let index = 0; index < res.data.messages.length; index++) {
                const element = res.data.messages[index];
                setUserMessage({})
                setMessageHistory(state => [...state, { bot: true, text: element.text.text }])
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        chatContainerRef.current.scrollTo({ behavior: "smooth", top: 9000 })
    }, [messageHistory])

    return (
        <Container {...props} visible={visible}>
            <Header title="HatBot" profilePic={require("../../assets/logo.png")}>
                <Icon icon="x-circle" onClick={props.onClose} />
            </Header>

            <ChatContainer ref={chatContainerRef}>
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
                    value={userMessage.text ?? ""}
                    onChange={({ target }) => setUserMessage({ bot: false, text: target.value })}
                    onKeyDown={e => e.key === "Enter" && userMessage.text && handleAddMessage()}
                    onClick={() => userMessage.text && handleAddMessage()}
                    buttonLoading={loading}
                />
            </Footer>
        </Container>
    )
}