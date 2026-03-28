import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import LanguageProvider from "./provider/LanguageProvider.jsx";
import CartProvider from "./provider/CartProvider.jsx";
import RoleProvider from "./provider/RoleProvider.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <RoleProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </RoleProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
