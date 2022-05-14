import React, { useEffect, useState } from "react"
import { Header } from "../../components"
import { getGitHubContributors } from "./api"

import { Container, ContributorContainer, ContributorName, Contributors, Image, Text, Title } from "./styles.js"

export default function About() {
    const [contributors, setContributors] = useState([]);
    useEffect(() => {
        getGitHubContributors().then((response) => setContributors(response.data))
    }, [])


    return (
        <Container>
            <Header title="Sobre" />
            <Text>
                Um cliente front-end para a plataforma <b>DialogFlow</b> que permite a criação de chatbots usando inteligência artificial.
            </Text>

            <Title>Colaboradores</Title>
            <Contributors>
                {
                    contributors.map((item) => (
                        <ContributorContainer>
                            <Image src={item.avatar_url} />
                            <ContributorName>{item.login}</ContributorName>
                        </ContributorContainer>
                    ))
                }
                 {
                    contributors.map((item) => (
                        <ContributorContainer>
                            <Image src={item.avatar_url} />
                            <ContributorName>{item.login}</ContributorName>
                        </ContributorContainer>
                    ))
                }
                 {
                    contributors.map((item) => (
                        <ContributorContainer>
                            <Image src={item.avatar_url} />
                            <ContributorName>{item.login}</ContributorName>
                        </ContributorContainer>
                    ))
                }
            </Contributors>
        </Container>
    )
}