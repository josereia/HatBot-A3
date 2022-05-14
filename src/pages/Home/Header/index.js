import React from "react";
import { Link } from "react-router-dom";
import { Header as HeaderComponent } from "../../../components";

import { ProfilePic, Title } from "./styles";

export default function Header(props) {
    return (
        <HeaderComponent>
            <Link to="/about">
                <ProfilePic src={require("../../../assets/logo.png")} />
            </Link>
            <Title>{props.title}</Title>
        </HeaderComponent>
    )
}