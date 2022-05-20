import Icon from "../../Icon"

import { Container } from "./styles"

export default function CircleButton({ icon, ...props }) {
    return (
        <Container {...props}>
            <Icon icon={icon} />
        </Container>
    )
}