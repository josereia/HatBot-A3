import { Container, Input } from "./styles"
import CircleButton from "../Buttons/CircleButton"

export default function TextInput({ style, onClick, ...props }) {
    return (
        <Container {...style}>
            <Input {...props} />
            {
                onClick &&
                <CircleButton icon="send" onClick={onClick} />
            }
        </Container>
    )
}