import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PassengerDataContext } from "../context/PassengerContext";
import { useNavigate } from "react-router-dom";

const PassengerProtectWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const token = Cookies.get("token");

    useEffect(() => {
        if(!token){
            navigate("/passenger-login");
        }
        setIsLoading(false);
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default PassengerProtectWrapper;
