import "./App.css";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "../feature/catalog/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function App() {
  const { darkMode } = useSelector((state: RootState) => state.ui);

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "",
      },
    },
  });

  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: 14 }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default App;
