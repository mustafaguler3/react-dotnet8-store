
import "./App.css";
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "../feature/catalog/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : ""
      }
    }
  })

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container maxWidth="xl">
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container sx={{mt: 14}}>
        <Outlet />
      </Container>
    </ThemeProvider>
    </Container>
  );
}

export default App;
