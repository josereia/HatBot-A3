import styled from "styled-components"
import FeatherIcon from "feather-icons-react"

export const IconComponent = styled(FeatherIcon)`
    cursor: ${(props) => props.onClick ? "pointer" : "none"};
`