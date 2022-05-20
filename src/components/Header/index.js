import { useNavigate } from "react-router-dom"
import Icon from "../Icon"

import { BackButton, Container, Title, LeftContainer, RightContainer, ProfilePic } from "./styles"

export default function Header({ title, backButton, profilePic, children, ...props }) {
    const navigate = useNavigate();

    return (
        <Container {...props}>
            <LeftContainer>
                {
                    backButton &&
                    <BackButton onClick={() => navigate(-1)}>
                        <Icon icon="arrow-left" />
                    </BackButton>
                }
                {
                    profilePic &&
                    <ProfilePic src={profilePic} />
                }
                <Title>{title}</Title>
            </LeftContainer>

            {
                children &&
                <RightContainer>
                    {children}
                </RightContainer>
            }
        </Container>
    )
}