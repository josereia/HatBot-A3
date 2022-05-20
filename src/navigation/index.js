import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"

export default function NavigationProvider() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}