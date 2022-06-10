import Icon from "../../Icon"
import LoadingSpin from "../../LoadingSpin"

import { Container } from "./styles"

export default function CircleButton({ icon, loading, ...props }) {
    return (
        <Container {...props}>
            {
                loading
                    ? <LoadingSpin />
                    : <Icon icon={icon} />
            }
        </Container>
    )
}