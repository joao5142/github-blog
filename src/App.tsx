import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.routes";
import { UserProvider } from "./contexts/UserContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
