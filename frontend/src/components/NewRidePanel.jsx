import React, { useContext, useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { RiPinDistanceFill } from "react-icons/ri";
import { DriverDataContext } from "../context/DriverContext";
import axios from "axios";

import io from "socket.io-client";
const socket = io.connect(`${import.meta.env.VITE_BASE_URL}`);

const NewRidePanel = () => {
    const {
        driverDetailsOpen,
        setDriverDetailsOpen,

        newRidePanelOpen,
        setNewRidePanelOpen,

        ongoingRidePanelOpen,
        setOngoingRidePanelOpen,

        passengerDetailsOnNewRidePanel,
        setPassengerDetailsOnNewRidePanel,

        passengerPickupLocationOnNewRidePanel,
        setPassengerPickupLocationOnNewRidePanel,

        passengerDestinationOnNewRidePanel,
        setPassengerDestinationOnNewRidePanel,

        totalFare,
        setTotalFare,
        travelDistanceInKm,
        setTravelDistanceInKm,
    } = useContext(DriverDataContext);

    useEffect(() => {
        socket.on("message_from_server", (data) => {
            setPassengerDetailsOnNewRidePanel(data.obj.passengerDetails);
            setPassengerPickupLocationOnNewRidePanel(data.obj.pickupLocation);
            setPassengerDestinationOnNewRidePanel(data.obj.destination);
            setTravelDistanceInKm(data.obj.travelDistanceInKm);
            setTotalFare(data.obj.totalFare);
        });
    }, [socket]);

    const [driverDetails, setDriverDetails] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/driver/profile`,
                    { withCredentials: true }
                );
                setDriverDetails(response.data);
            } catch (error) {
                console.error(`error fetching driver details`, error);
            }
        })();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-6 p-4 ">
                <h2 className="text-2xl font-bold">New Ride Available!</h2>

                <div className="flex items-center justify-between bg-yellow-400 rounded-lg p-2">
                    <img
                        className="w-1/6 rounded-full"
                        src="https://developerasad.xyz/static/media/asad-tshirt.58afc33efad9f9113298.jpg"
                        alt=""
                    />
                    <h3 className="font-semibold">
                        {passengerDetailsOnNewRidePanel?.passenger
                            ? passengerDetailsOnNewRidePanel?.passenger?.name
                            : "name..."}
                    </h3>
                </div>
                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoMdPerson />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">From</h4>
                        <p className="text-lg">
                            {passengerPickupLocationOnNewRidePanel
                                ? passengerPickupLocationOnNewRidePanel
                                : ""}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoLocationSharp />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">To</h4>
                        <p className="text-lg">
                            {passengerDestinationOnNewRidePanel
                                ? passengerDestinationOnNewRidePanel
                                : ""}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <RiPinDistanceFill />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">Distance</h4>
                        <p className="text-lg">
                            {travelDistanceInKm ? travelDistanceInKm : 0} KM
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xl">
                        <TbCoinTakaFilled />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">
                            <span className="text-xxl font-bold">&#2547;</span>{" "}
                            {totalFare ? totalFare : 0}
                        </h4>
                        <p className="text-lg">Cash</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setDriverDetailsOpen(false);
                            setNewRidePanelOpen(false);
                            setOngoingRidePanelOpen(true);

                            socket.emit("message_from_client", {
                                obj: {
                                    message: "driver_accepted_ride",
                                    driverDetails: driverDetails,
                                },
                            });
                        }}
                        className="w-full bg-green-600 mt-2 rounded py-2 text-white block text-center font-semibold"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => {
                            setDriverDetailsOpen(true);
                            setNewRidePanelOpen(false);
                        }}
                        className="w-full bg-gray-500 mt-2 rounded py-2 text-white block text-center font-semibold"
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewRidePanel;
