import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PassengerContext from "./context/PassengerContext.jsx";

createRoot(document.getElementById("root")).render(
    <PassengerContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PassengerContext>
);
