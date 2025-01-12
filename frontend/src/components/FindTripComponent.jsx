import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalBold } from "react-icons/pi";
import LocationSearchComponent from "./LocationSearchComponent";
import { PassengerDataContext } from "../context/PassengerContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FindTripComponent = () => {
    const [panelOpen, setPanelOpen] = useContext(PassengerDataContext);

    return (
        <>
            <div className="flex flex-col justify-between items-start gap-3 p-7">
                <div className="w-full flex justify-between items-start">
                    <h2 className="text-2xl font-semibold">Find A Trip</h2>
                    {panelOpen && (
                        <i
                            onClick={() => {
                                setPanelOpen(!panelOpen);
                            }}
                            className="text-3xl"
                        >
                            <IoIosArrowDown />
                        </i>
                    )}
                </div>
                <form className="relative">
                    <input
                        onClick={() => {
                            setPanelOpen(true);
                        }}
                        type="text"
                        placeholder="Add a pickup location"
                        required
                        className="w-full py-2 rounded px-6 mb-4 bg-[#eee]"
                    />
                    <input
                        type="text"
                        placeholder="Enter your destination"
                        required
                        className="w-full py-2 rounded px-6 mb-5 bg-[#eee]"
                    />
                    <button
                        type="submit"
                        className="block w-full bg-black font-semibold rounded py-2 text-white"
                    >
                        Find Trip
                    </button>
                    <i className="absolute top-6 -left-4 text-6xl">
                        <PiLineVerticalBold />
                    </i>
                </form>
                {/* {panelOpen && (
                    <div>
                        <LocationSearchComponent />
                    </div>
                )} */}
            </div>
        </>
    );
};

export default FindTripComponent;
