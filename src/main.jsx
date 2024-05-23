import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2E3532",
    },
    secondary: {
      main: "#d3efbd",
    },
    error: {
      main: "#f44336",
    },
    yellow: {
      main: "#FFCA3A",
    },
  },
  typography: {
    fontFamily: "Zilla Slab",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
