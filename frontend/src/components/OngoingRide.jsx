import React, { useContext } from "react";
import { DriverDataContext } from "../context/DriverContext";

const OngoingRide = () => {
    const {
        driverDetailsOpen,
        setDriverDetailsOpen,

        newRidePanelOpen,
        setNewRidePanelOpen,

        ongoingRidePanelOpen,
        setOngoingRidePanelOpen,

        finishRidePanelOpen,
        setFinishRidePanelOpen,
    } = useContext(DriverDataContext);
    return (
        <>
            <div className="flex justify-between p-4 items-center py-8">
                <h2 className="font-bold text-lg">1.6 KM away</h2>
                <button
                    onClick={() => {
                        setFinishRidePanelOpen(true);
                        setOngoingRidePanelOpen(false);
                        setNewRidePanelOpen(false);
                        setDriverDetailsOpen(false);
                    }}
                    className="w-3/5 bg-green-600 mt-2 rounded py-2 text-white block text-center font-semibold"
                >
                    Complete Ride
                </button>
            </div>
        </>
    );
};

export default OngoingRide;
