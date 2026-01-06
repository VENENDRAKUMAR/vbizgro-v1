import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import FloatingNavbar from "./Pages/Nav.jsx";
import Footer from "./Pages/Footer.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    
 <FloatingNavbar/>
 
      <App />

              <Footer />
    </BrowserRouter>
  </StrictMode>
);
