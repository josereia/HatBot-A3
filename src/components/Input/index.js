import { useState, useEffect, useRef } from "react";
import CircleButton from "../Buttons/CircleButton";
import Icon from "../Icon";
import { Container, Input, SendButton } from "./styles";

export default function TextInput({ placeholder, handleAddMessage }) {
    const [message, setmessage] = useState('')

    const ref = useRef(null)
    const sendMessage = () => {
        handleAddMessage(message)
        ref.current.value = null
    }
    const handleKeyPress = event => {
        event.key === 'Enter' && console.log('apertou enter')
    }

    return (
        <Container>
            <Input type="text" placeholder={placeholder} onChange={(e) => setmessage(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} ref={ref} />
            <CircleButton onClick={() => sendMessage()} icon="send" />
        </Container>
    )
}