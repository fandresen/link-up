import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { KeycloakProvider } from "./context/KeycloackContext.tsx";

createRoot(document.getElementById("root")!).render(
  <KeycloakProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </KeycloakProvider>
);
