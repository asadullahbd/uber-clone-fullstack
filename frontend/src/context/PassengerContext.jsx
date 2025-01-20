import React, { createContext, useState } from "react";

export const PassengerDataContext = createContext();

const PassengerContext = ({ children }) => {
    const [findTripComponentOpen, setFindTripComponentOpen] = useState(false);
    const [chooseVehiclePanelOpen, setChooseVehiclePanelOpen] = useState(false);
    const [lookingForDriverComponentOpen, setLookingForDriverComponentOpen] =
        useState(false);
    const [confirmTripComponentOpen, setConfirmTripComponentOpen] =
        useState(false);
    const value = {
        findTripComponentOpen,
        setFindTripComponentOpen,
        chooseVehiclePanelOpen,
        setChooseVehiclePanelOpen,
        lookingForDriverComponentOpen,
        setLookingForDriverComponentOpen,
        confirmTripComponentOpen,
        setConfirmTripComponentOpen,
    };
    return (
        <div>
            <PassengerDataContext.Provider value={value}>
                {children}
            </PassengerDataContext.Provider>
        </div>
    );
};

export default PassengerContext;
