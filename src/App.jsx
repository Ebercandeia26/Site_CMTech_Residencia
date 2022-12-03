import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

/* Arquivo principal , onde nele é chamado o componente Pai de todas as rotas. Renderizando tudo da aplicação React*/

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
