import React, { useContext, useEffect } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { RiPinDistanceFill } from "react-icons/ri";
import { PassengerDataContext } from "../context/PassengerContext";

import io from "socket.io-client";
const socket = io.connect(`${import.meta.env.VITE_BASE_URL}`);

const ConfirmedTrip = () => {
    const {
        driverDetailsOnPassengerContext,
        setDriverDetailsOnPassengerContext,
        pickupLocation,
        destination,
        setConfirmTripComponentOpen,
        travelDistanceInKm,
        totalFare
    } = useContext(PassengerDataContext);

    useEffect(() => {
        socket.on("message_from_server", (data) => {
            setDriverDetailsOnPassengerContext(data.obj.driverDetails);
        });
    }, [socket]);

    return (
        <>
            <div className="flex flex-col gap-3 p-4">
            <h2 className="text-2xl font-bold">Ongoing Ride</h2>
                <div className="flex justify-between items-center">
                    <img
                        className="w-2/4 self-center"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                        alt=""
                    />

                    <div className="text-right">
                        <h3 className="text-2xl font-semibold">
                            {driverDetailsOnPassengerContext?.driver?.name}
                        </h3>
                        <h2 className="text-2xl font-bold">
                            {
                                driverDetailsOnPassengerContext?.driver?.vehicle
                                    ?.plate
                            }
                        </h2>
                        <p className="text-2xl">
                            {
                                driverDetailsOnPassengerContext?.driver?.vehicle
                                    ?.color
                            }
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoMdPerson />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">From</h4>
                        <p className="text-lg">{pickupLocation}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoLocationSharp />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">To</h4>
                        <p className="text-lg">{destination}</p>
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
                <button
                    onClick={() => {
                        setConfirmTripComponentOpen(false);
                    }}
                    className="w-full bg-green-600 mt-2 rounded py-2 text-white block text-center font-semibold "
                >
                    Finish Ride 
                </button>
            </div>
        </>
    );
};

export default ConfirmedTrip;
