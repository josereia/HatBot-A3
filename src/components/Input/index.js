import { Container, Input } from "./styles"
import CircleButton from "../Buttons/CircleButton"

export default function TextInput({ style, onClick, buttonLoading, ...props }) {
    return (
        <Container {...style}>
            <Input {...props} />
            {
                onClick &&
                <CircleButton icon="send" onClick={onClick} loading={buttonLoading} />
            }
        </Container>
    )
}