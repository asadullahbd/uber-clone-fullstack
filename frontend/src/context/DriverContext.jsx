import React, { createContext, useState } from "react";

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {
    const [driverDetailsOpen, setDriverDetailsOpen] = useState(true);
    const [newRidePanelOpen, setNewRidePanelOpen] = useState(false); 
    const [ongoingRidePanelOpen, setOngoingRidePanelOpen] = useState(false); 
    const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false); 

    const [passengerDetailsOnNewRidePanel, setPassengerDetailsOnNewRidePanel] =
            useState(null);
        const [passengerPickupLocationOnNewRidePanel, setPassengerPickupLocationOnNewRidePanel] =
            useState(null);
        const [passengerDestinationOnNewRidePanel, setPassengerDestinationOnNewRidePanel] =
            useState(null);

            const [travelDistanceInKm, setTravelDistanceInKm] = useState(null);
                    const [totalFare, setTotalFare] = useState(0);

    const value = {
        travelDistanceInKm, setTravelDistanceInKm,

        totalFare, setTotalFare,
        
        driverDetailsOpen,
        setDriverDetailsOpen,

        newRidePanelOpen,
        setNewRidePanelOpen,

        ongoingRidePanelOpen,
        setOngoingRidePanelOpen,

        finishRidePanelOpen,
        setFinishRidePanelOpen,

        passengerDetailsOnNewRidePanel, setPassengerDetailsOnNewRidePanel,

        passengerPickupLocationOnNewRidePanel, setPassengerPickupLocationOnNewRidePanel,

        passengerDestinationOnNewRidePanel, setPassengerDestinationOnNewRidePanel
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
