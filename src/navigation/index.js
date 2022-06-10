import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { Chat, ChatBotComponent, Header, Title } from "./styles"

export default function NavigationProvider() {
    const [showChat, setShowChat] = useState(false)
    return (
        <BrowserRouter>
            <Header>
                <Title>A3G2 Escola de Inglês</Title>
                <div>

                </div>
            </Header>
            <Routes />
            <Chat onClick={() => setShowChat(true)}>
                <div>
                    <img src={require("../assets/botLogo.png")} alt="" />
                </div>
                <p>Alguma dúvida?</p>
            </Chat>
            {
                showChat &&
                <ChatBotComponent onClose={() => setShowChat(false)} />
            }
        </BrowserRouter>
    )
}