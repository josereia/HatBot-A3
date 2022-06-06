import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { Chat, Header, Title } from "./styles"

export default function NavigationProvider() {
    return (
        <BrowserRouter>
            <Header>
                <Title>A3G2 Escola de Inglês</Title>
                <div>

                </div>
            </Header>
            <Routes />
            <Chat>
                <div>
                    <img src={require("../assets/botLogo.png")} alt="" />
                </div>
                <p>Alguma dúvida?</p>
            </Chat>
        </BrowserRouter>
    )
}