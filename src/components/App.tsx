import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

const App = () => {
  // добавить роуты
  return <ThemeProvider theme={theme}>Hello World, yeah</ThemeProvider>;
};

export default App;
