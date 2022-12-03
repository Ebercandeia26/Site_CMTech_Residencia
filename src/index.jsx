import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CssBaseline />
    <App />
    <ToastContainer />
  </StrictMode>
);
