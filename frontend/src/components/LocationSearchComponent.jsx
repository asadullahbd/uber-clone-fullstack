import React from "react";
import { IoLocation } from "react-icons/io5";

const LocationSearchComponent = () => {
    return (
        <div className="flex flex-col gap-4 font-medium">
            <div className="flex justify-start gap-2">
                <i>
                    <IoLocation />
                </i>
                <h4>tangail, dhaka , bangladesh</h4>
            </div>
            <div className="flex justify-start gap-2">
                <i>
                    <IoLocation />
                </i>
                <h4>Gazipur, dhaka , bangladesh</h4>
            </div>
            <div className="flex justify-start gap-2">
                <i>
                    <IoLocation />
                </i>
                <h4>Narayanganj, dhaka , bangladesh</h4>
            </div>
        </div>
    );
};

export default LocationSearchComponent;
