import Icon from "../../Icon"

import { Container, Text } from "./styles"

export default function Button({ icon, children, ...props }) {
    return (
        <Container {...props}>
            <Icon icon={icon} />
            <Text>{children}</Text>
        </Container>
    )
}