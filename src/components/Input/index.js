import {useState, useEffect} from "react";
import Icon from "../Icon";
import { Container, Input, SendButton } from "./styles";

export default function TextInput({placeholder, handleAddMessage}) {
    const [message, setmessage] = useState('')
    const [clearMessageKey, setClearMessageKey] = useState(0)

    const sendMessage = () => {
        handleAddMessage(message)
        setClearMessageKey(clearMessageKey + 1)
    }

    useEffect(() => {
        clearMessageKey > 0 && setmessage('')
    }, [clearMessageKey]);

    return (
        <Container>
            <Input type="text" placeholder={placeholder} onChange={(e) => setmessage(e.target.value)}/>
            <SendButton onClick={() => sendMessage()}>
                <Icon icon="send" />
            </SendButton>
        </Container>
    )
}