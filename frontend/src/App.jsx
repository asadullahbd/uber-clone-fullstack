import React from "react";
import { Routes, Route } from "react-router-dom";
import PassengerHome from "./pages/PassengerHome";
import PassengerSignUp from "./pages/PassengerSignUp";
import StartPage from "./pages/StartPage";
import PassengerLogin from "./pages/PassengerLogin";
import PassengerProtectWrapper from "./pages/PassengerProtectWrapper";
import DriverLogin from "./pages/DriverLogin";
import DriverSignUp from "./pages/DriverSignUp";
import DriverHome from "./pages/DriverHome";
import DriverProtectWrapper from "./pages/DriverProtectWrapper";

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

            {/* driver routes */}
            <Route path="/driver-signup" element={<DriverSignUp />} />
            <Route path="/driver-login" element={<DriverLogin />} />
            <Route
                path="/driver-home"
                element={
                    <DriverProtectWrapper>
                        <DriverHome />
                    </DriverProtectWrapper>
                }
            />
        </Routes>
    );
};

export default App;
