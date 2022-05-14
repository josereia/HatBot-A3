import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

//screens
import Home from "../pages/Home";
import About from "../pages/About";

export default function Routes() {
    return (
        <Switch>
            <Route index element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
        </Switch>
    )
}