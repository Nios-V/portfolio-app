import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from './theme';
import "./global.css";
import { ColorModeProvider } from '../src/components/ui/color-mode'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
