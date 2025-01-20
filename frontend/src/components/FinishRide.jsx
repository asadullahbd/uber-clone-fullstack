import React, { useContext } from "react";
import { IoMdPerson } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";
import { DriverDataContext } from "../context/DriverContext";

const FinishRide = () => {
    const {
        setDriverDetailsOpen,

        setNewRidePanelOpen,

        setOngoingRidePanelOpen,

        setFinishRidePanelOpen
    } = useContext(DriverDataContext);
    return (
        <>
            <div className="flex flex-col gap-6 p-4 ">
                <h2 className="text-2xl font-bold">Finish This Ride</h2>

                <div className="flex items-center justify-between bg-yellow-400 rounded-lg p-2">
                    <img
                        className="w-1/6 rounded-full"
                        src="https://developerasad.xyz/static/media/asad-tshirt.58afc33efad9f9113298.jpg"
                        alt=""
                    />
                    <h3 className="font-semibold">Asad Ullah</h3>
                    <h4 className="font-semibold">2.2 KM</h4>
                </div>
                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoMdPerson />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">1201/11A</h4>
                        <p className="text-lg">airport,dhaka</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 border-b-2 pb-3">
                    <span className="text-xl">
                        <IoLocationSharp />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">1941/1</h4>
                        <p className="text-lg">Sakhipur,Tangail</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xl">
                        <TbCoinTakaFilled />
                    </span>
                    <div>
                        <h4 className="font-semibold text-xl">$280</h4>
                        <p className="text-lg">Cash</p>
                    </div>
                </div>
                <div>
                    <button
                    onClick={() => {
                        setFinishRidePanelOpen(false);
                        setOngoingRidePanelOpen(false);
                        setNewRidePanelOpen(false);
                        setDriverDetailsOpen(true);
                    }}
                    
                     className="w-full bg-green-600 mt-2 rounded py-2 text-white block text-center font-semibold">
                        Finish Ride
                    </button>
                </div>
            </div>
        </>
    );
};

export default FinishRide;
