import React from "react";
import { Routes, Route } from "react-router-dom";
import PassengerHome from "./pages/passengerHome";
import PassengerSignUp from "./pages/PassengerSignUp";
import StartPage from "./pages/StartPage";
import PassengerLogin from "./pages/PassengerLogin";
import PassengerProtectWrapper from "./pages/PassengerProtectWrapper";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route
                path="/passenger-home"
                element={
                    <PassengerProtectWrapper>
                        <PassengerHome />
                    </PassengerProtectWrapper>
                }
            />
            
            <Route path="/passenger-signup" element={<PassengerSignUp />} />
            <Route path="/passenger-login" element={<PassengerLogin />} />
        </Routes>
    );
};

export default App;
