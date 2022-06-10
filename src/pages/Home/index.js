import { Container, Section1, Button, BlurCircle, CircleButton, LeftContainer, ButtonsContainer, RightContainer, ImageContainer, SocialButtonsContainer } from "./styles"

export default function Home() {
    return (
        <Container>
            <Section1>
                <LeftContainer>
                    <h1>Do Básico ao Avançado!</h1>
                    <p>Tenha um desconto especial durante seus primeiros 03 meses de estudos.</p>
                    <ButtonsContainer>
                        <Button>Comece agora!</Button>
                        <Button style={{ backgroundColor: "#DEDEDE", color: "#000000" }}>
                            Saiba mais!
                        </Button>
                    </ButtonsContainer>
                </LeftContainer>
                <RightContainer>
                    <ImageContainer>
                        <BlurCircle />
                        <img src={require("../../assets/person.webp")} alt="" />
                    </ImageContainer>
                    <SocialButtonsContainer>
                        <CircleButton>
                            <img src={require("../../assets/whats.png")} alt="" />
                        </CircleButton>
                        <CircleButton>
                            <img src={require("../../assets/insta.png")} alt="" />
                        </CircleButton>
                        <CircleButton>
                            <img src={require("../../assets/email.png")} alt="" />
                        </CircleButton>
                    </SocialButtonsContainer>
                </RightContainer>
            </Section1>
        </Container>
    );
}