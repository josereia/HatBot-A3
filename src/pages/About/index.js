import { useEffect, useState } from "react"
import { Button, Header } from "../../components"
import { getGitHubContributors } from "./api"

import { Container, ContributorContainer, ContributorName, Contributors, Image, Text, Title } from "./styles.js"

export default function About() {
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        getGitHubContributors()
            .then((response) => setContributors(response.data))
    }, [])

    return (
        <Container>
            <Header title="Sobre" backButton={true} />

            <Text>
                Um cliente front-end para a plataforma <b>DialogFlow</b> que permite a criação de chatbots usando inteligência artificial.
            </Text>

            <div>
                <Title>Colaboradores</Title>
                <Contributors>
                    {
                        contributors.map((item, index) => (
                            <ContributorContainer key={index}>
                                <Image src={item.avatar_url} />
                                <ContributorName>{item.login}</ContributorName>
                            </ContributorContainer>
                        ))
                    }
                </Contributors>
            </div>

            <a href="https://github.com/josereia/Chatbot-A3" target="_blank"><Button icon="arrow-right" inverted>GitHub</Button></a>
        </Container>
    )
}