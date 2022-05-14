import React from "react"
import { Header } from "../../components"

import { Container, Text } from "./styles.js"

export default function About() {
    return (
        <Container>
            <Header title="Sobre"/>
            <Text>
                Componente About criado com sucesso!
            </Text>
        </Container>
    )
}