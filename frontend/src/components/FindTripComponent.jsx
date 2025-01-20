import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalBold } from "react-icons/pi";
import { PassengerDataContext } from "../context/PassengerContext";

const FindTripComponent = () => {
    const {
        findTripComponentOpen,
        setFindTripComponentOpen,
        setChooseVehiclePanelOpen,
    } = useContext(PassengerDataContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        setFindTripComponentOpen(false);
        setChooseVehiclePanelOpen(true);
    };

    return (
        <>
            <div className="flex flex-col justify-between items-start gap-3 p-7">
                <div className="w-full flex justify-between items-start">
                    <h2 className="text-2xl font-semibold">Find A Trip</h2>
                    {findTripComponentOpen && (
                        <i
                            onClick={() => {
                                setFindTripComponentOpen(false);
                            }}
                            className="text-3xl"
                        >
                            <IoIosArrowDown />
                        </i>
                    )}
                </div>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    className="relative"
                >
                    <input
                        
                        onClick={() => {
                            setFindTripComponentOpen(true);
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
            </div>
        </>
    );
};

export default FindTripComponent;
