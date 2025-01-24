import React, { useContext, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalBold } from "react-icons/pi";
import { PassengerDataContext } from "../context/PassengerContext";
import axios from "axios";
import LocationSearchComponent from "./LocationSearchComponent";

const FindTripComponent = () => {
    const {
        findTripComponentOpen,
        setFindTripComponentOpen,
        setChooseVehiclePanelOpen,
        setPickupLocation,
        setDestination,
        setPlaceSuggestions,
    } = useContext(PassengerDataContext);

    const pickupLocationRef = useRef(null);
    const destinationRef = useRef(null);
    const [activeField, setActiveField] = useState(null);

    const autoSuggestLocation = async () => {
        const value =
            activeField === "pickup"
                ? pickupLocationRef.current.value
                : destinationRef.current.value;

        if (value.length > 2) {
            try {
                // const response = await axios.get(
                //     `${import.meta.env.VITE_BASE_URL}/maps/getSuggestions`,
                //     {
                //         withCredentials: true,
                //         params: {
                //             input: value
                //         },
                //     }
                // );

                const response = {
                    data: [
                        "dhaba",
                        "Dhamaka Premium Indian Kitchen & Lounge, Virginia Parkway, McKinney, TX, USA",
                        "Dhaka, Bangladesh",
                        "Dharmasthala, Karnataka, India",
                        "dharamshala",
                    ],
                };
                setPlaceSuggestions(response.data);
            } catch (error) {
                console.error(`error fetching auto suggestions`, error);
            }
        }
    };
   
    

    const handleSuggestionSelect = (selectedValue) => {
        if (activeField === "pickup") {
            pickupLocationRef.current.value = selectedValue; // Update pickup location
            setPickupLocation(selectedValue);
        } else if (activeField === "destination") {
            destinationRef.current.value = selectedValue; // Update destination
            setDestination(selectedValue);
        }
        setPlaceSuggestions([]); // Clear suggestions
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFindTripComponentOpen(false);
        setChooseVehiclePanelOpen(true);

        setPickupLocation(pickupLocationRef.current.value);
        setDestination(destinationRef.current.value);
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
                        ref={pickupLocationRef}
                        onFocus={() => setActiveField("pickup")}
                        onChange={autoSuggestLocation}
                    />

                    <input
                        onClick={() => {
                            setFindTripComponentOpen(true);
                        }}
                        type="text"
                        placeholder="Enter your destination"
                        required
                        className="w-full py-2 rounded px-6 mb-5 bg-[#eee]"
                        ref={destinationRef}
                        onFocus={() => setActiveField("destination")}
                        onChange={autoSuggestLocation}
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
                <div>
                    <LocationSearchComponent
                        onSelectSuggestion={handleSuggestionSelect}
                    />
                </div>
            </div>
        </>
    );
};

export default FindTripComponent;
