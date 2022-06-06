import { Container, Section1, Button, BlurCircle, CircleButton } from "./styles"

export default function Home() {

    return (
        <Container>
            <Section1>
                <div style={{ width: "536px" }}>
                    <h1>Do Básico ao Avançado!</h1>
                    <p>Tenha um desconto especial durante seus primeiros 03 meses de estudos.</p>
                    <div style={{ width: "inherit", display: "flex", justifyContent: "space-between" }}>
                        <Button>Comece agora!</Button>
                        <Button style={{ backgroundColor: "#DEDEDE", color: "#000000" }}>
                            Saiba mais!
                        </Button>
                    </div>
                </div>
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <div style={{ width: "60%", height: "100%", display: "flex", alignItems: "flex-end" }}>
                        <BlurCircle />
                        <img src={require("../../assets/person.webp")} alt="" style={{ height: "800px" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <CircleButton>
                            <img src={require("../../assets/whats.png")} alt="" />
                        </CircleButton>
                        <CircleButton>
                            <img src={require("../../assets/insta.png")} alt="" />
                        </CircleButton>
                        <CircleButton>
                            <img src={require("../../assets/email.png")} alt="" />
                        </CircleButton>
                    </div>
                </div>
            </Section1>
        </Container>
    );
}