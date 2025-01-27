import React, { createContext, useState } from "react";

export const PassengerDataContext = createContext();

const PassengerContext = ({ children }) => {
    const [findTripComponentOpen, setFindTripComponentOpen] = useState(false);
    const [chooseVehiclePanelOpen, setChooseVehiclePanelOpen] = useState(false);
    const [lookingForDriverComponentOpen, setLookingForDriverComponentOpen] =
        useState(false);
    const [confirmTripComponentOpen, setConfirmTripComponentOpen] =
        useState(false);
    const [pickupLocation, setPickupLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [placeSuggestions, setPlaceSuggestions] = useState([]);
    const [
        driverDetailsOnPassengerContext,
        setDriverDetailsOnPassengerContext,
    ] = useState({});
    const [travelDistanceInKm, setTravelDistanceInKm] = useState(null);
    const [totalFare, setTotalFare] = useState(0);

    const value = {
        findTripComponentOpen,
        setFindTripComponentOpen,
        chooseVehiclePanelOpen,
        setChooseVehiclePanelOpen,
        lookingForDriverComponentOpen,
        setLookingForDriverComponentOpen,
        confirmTripComponentOpen,
        setConfirmTripComponentOpen,
        pickupLocation,
        setPickupLocation,
        destination,
        setDestination,
        placeSuggestions,
        setPlaceSuggestions,

        driverDetailsOnPassengerContext,
        setDriverDetailsOnPassengerContext,

        travelDistanceInKm, setTravelDistanceInKm,

        totalFare, setTotalFare
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
