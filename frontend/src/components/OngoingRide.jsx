import React, { useContext } from "react";
import { DriverDataContext } from "../context/DriverContext";
import { IoMdPerson } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { RiPinDistanceFill } from "react-icons/ri";

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

        passengerDetailsOnNewRidePanel, 

        passengerPickupLocationOnNewRidePanel, 

        passengerDestinationOnNewRidePanel, 

        totalFare, setTotalFare,
        travelDistanceInKm, setTravelDistanceInKm
        
    } = useContext(DriverDataContext);
    return (
        <>
            <div className="flex justify-between flex-col p-4 items-center py-8">
            <div className="flex flex-col gap-3 p-4">
                    <h2 className="text-2xl font-bold">Ongoing Ride</h2>
                    
                    {/* <img
                        className="w-2/4 self-center"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                        alt=""
                    /> */}

                    <div className="flex items-center justify-between bg-yellow-400 rounded-lg p-2">
                    <img
                        className="w-1/6 rounded-full"
                        src="https://developerasad.xyz/static/media/asad-tshirt.58afc33efad9f9113298.jpg"
                        alt=""
                    />
                    <h3 className="font-semibold">{passengerDetailsOnNewRidePanel?passengerDetailsOnNewRidePanel?.passenger?.name:"..."}</h3>
                </div>

                    <div className="flex items-center gap-3 border-b-2 pb-3">
                        <span className="text-xl">
                            <IoMdPerson />
                        </span>
                        <div>
                            <h4 className="font-semibold text-xl">from</h4>
                            <p className="text-lg">{passengerPickupLocationOnNewRidePanel?passengerPickupLocationOnNewRidePanel:"..."}</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-3 border-b-2 pb-3">
                        <span className="text-xl">
                            <IoLocationSharp />
                        </span>
                        <div>
                            <h4 className="font-semibold text-xl">To</h4>
                            <p className="text-lg">{passengerDestinationOnNewRidePanel?passengerDestinationOnNewRidePanel:"..."}</p>
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
                </div>
                <button
                    onClick={() => {
                        setFinishRidePanelOpen(false);
                        setOngoingRidePanelOpen(false);
                        setNewRidePanelOpen(false);
                        setDriverDetailsOpen(true);
                    }}
                    className="w-full bg-green-600 mt-2 rounded py-2 text-white block text-center font-semibold "
                >
                    Finish Ride
                </button>
            </div>
        </>
    );
};

export default OngoingRide;
