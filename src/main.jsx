import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Context/Addfav";
import App from "./component/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
