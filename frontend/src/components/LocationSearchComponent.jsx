import React, { useContext } from "react";
import { IoLocation } from "react-icons/io5";
import { PassengerDataContext } from "../context/PassengerContext";

const LocationSearchComponent = ({ onSelectSuggestion }) => {
    const { placeSuggestions } = useContext(PassengerDataContext);
    return (
        <div className="flex flex-col gap-4 font-medium">
            {placeSuggestions.map((item, index) => {
                return (
                    <div  onClick={() => onSelectSuggestion(item)} key={index} className="flex justify-start gap-2">
                        <i>
                            <IoLocation />
                        </i>
                        <h4>{item}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default LocationSearchComponent;
