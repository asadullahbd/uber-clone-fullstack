import React, { useContext, useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { PassengerDataContext } from "../context/PassengerContext";

import io from "socket.io-client";
import axios from "axios";
const socket = io.connect(`http://localhost:4100`);

const ChooseVehicleComponent = () => {
    const {
        setChooseVehiclePanelOpen,
        setFindTripComponentOpen,
        setLookingForDriverComponentOpen,
        pickupLocation,
        destination,
        fare,
    } = useContext(PassengerDataContext);

    const [passengerDetails, setPassengerDetails] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/passenger/profile`,
                    { withCredentials: true }
                );
                setPassengerDetails(response.data);
            } catch (error) {
                console.error(`error fetching driver details`, error);
            }
        })();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-between items-start gap-5 p-7">
                <div>
                    <h2 className="text-2xl font-bold">Choose a Vehicle</h2>
                </div>

                <div
                    onClick={() => {
                        setLookingForDriverComponentOpen(true);
                        setChooseVehiclePanelOpen(false);
                        setFindTripComponentOpen(false);

                        socket.emit("message_from_client", {
                            obj: {
                                message: "searching_driver",
                                passengerDetails: passengerDetails,
                            },
                        });
                    }}


                  
                    
                    className="border border-gray-200 p-2 my-1"
                >
                    <div className="flex justify-start items-center overflow-hidden">
                        <img
                            className="w-1/4 scale-150 "
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                            alt=""
                        />
                        <div className="z-10 flex flex-col gap-1">
                            <div className="flex justify-start items-center gap-2">
                                <h4 className="font-semibold">UberGo</h4>
                                <div className="flex justify-start items-center font-semibold">
                                    <IoMdPerson />
                                    <span>4</span>
                                </div>
                            </div>
                            <h5 className="font-semibold">2 mins away</h5>
                            <p className="text-sm">Affordable,compact rides</p>
                        </div>
                        <h3 className="p-2 font-bold">$130</h3>
                    </div>
                </div>

                {/* <div
                    onClick={() => {
                        setLookingForDriverComponentOpen(true);
                        setChooseVehiclePanelOpen(false);
                        setFindTripComponentOpen(false);

                        socket.emit("message_from_client", {
                            obj:{
                                message :"searching_driver"
                            },
                        });
                    }}
                    className="border border-gray-200 p-2 my-1"
                >
                    <div className="flex justify-start items-center">
                        <img
                            className="w-1/5 mr-2 scale-150 "
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                            alt=""
                        />
                        <div className="z-10 flex flex-col gap-1">
                            <div className="flex justify-start items-center gap-2">
                                <h4 className="font-semibold">Moto</h4>
                                <div className="flex justify-start items-center font-semibold">
                                    <IoMdPerson />
                                    <span>1</span>
                                </div>
                            </div>
                            <h5 className="font-semibold">3 mins away</h5>
                            <p className="text-sm">Affordable,compact rides</p>
                        </div>
                        <h3 className="p-2 font-bold">$65</h3>
                    </div>
                </div> */}

                {/* <div
                    onClick={() => {
                        setLookingForDriverComponentOpen(true);
                        setChooseVehiclePanelOpen(false);
                        setFindTripComponentOpen(false);

                        socket.emit("message_from_client", {
                            obj:{
                                message :"searching_driver"
                            },
                        });
                    }}
                    className="border border-gray-200 p-2 my-1"
                >
                    <div className="flex justify-start items-center overflow-hidden">
                        <img
                            className="w-1/4 scale-150 "
                            src="https://i.pinimg.com/736x/ee/1e/d6/ee1ed6b1dc124aa8150fb622a4c454c3.jpg"
                            alt=""
                        />
                        <div className="z-10 flex flex-col gap-1">
                            <div className="flex justify-start items-center gap-2">
                                <h4 className="font-semibold">CNG</h4>
                                <div className="flex justify-start items-center font-semibold">
                                    <IoMdPerson />
                                    <span>3</span>
                                </div>
                            </div>
                            <h5 className="font-semibold">2 mins away</h5>
                            <p className="text-sm">Affordable,compact rides</p>
                        </div>
                        <h3 className="p-2 font-bold">$100</h3>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default ChooseVehicleComponent;
