import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigation";
import getTheme from "./theme"

export default function App() {
	return (
		<ThemeProvider theme={getTheme()}>
			<Navigation />
		</ThemeProvider>
	);
}