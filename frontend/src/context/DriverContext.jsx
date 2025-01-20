import React, { createContext, useState } from "react";

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {
    const [driverDetailsOpen, setDriverDetailsOpen] = useState(true);
    const [newRidePanelOpen, setNewRidePanelOpen] = useState(true); 
    const [ongoingRidePanelOpen, setOngoingRidePanelOpen] = useState(false); 
    const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false); 

    const value = {
        driverDetailsOpen,
        setDriverDetailsOpen,

        newRidePanelOpen,
        setNewRidePanelOpen,

        ongoingRidePanelOpen,
        setOngoingRidePanelOpen,

        finishRidePanelOpen,
        setFinishRidePanelOpen
    };

    return (
        <div>
            <DriverDataContext.Provider value={value}>
                {children}
            </DriverDataContext.Provider>
        </div>
    );
};

export default DriverContext;
