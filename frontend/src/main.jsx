import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PassengerContext from "./context/PassengerContext.jsx";
import DriverContext from "./context/DriverContext.jsx";

createRoot(document.getElementById("root")).render(
    <DriverContext>
        <PassengerContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PassengerContext>
    </DriverContext>
);
