import { Container, TextContainer, Text, ProfilePic } from "./styles"

export default function TextBox({ direction, text }) {
    return (
        <Container {...{ direction }}>
            {
                direction === "left" &&
                <ProfilePic src={require("../../../../assets/logo.png")} />
            }

            <TextContainer {...{ direction }}>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    )
}