import React, { useContext, useEffect, useRef, useState } from "react";
import FindTripComponent from "../components/FindTripComponent";
import LiveTracking from "../components/LiveTracking";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PassengerDataContext } from "../context/PassengerContext";
import uberLogoBlack from "../assets/image/uber-logo-black.png";
import { TbLogout } from "react-icons/tb";
import Cookies from "js-cookie";
import ChooseVehicleComponent from "../components/ChooseVehicleComponent";
import LookingForDriver from "../components/LookingForDriver";
import ConfirmedTrip from "../components/ConfirmedTrip";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";
const socket = io.connect(`${import.meta.env.VITE_BASE_URL}`);

const PassengerHome = () => {
    const searchPanel = useRef(null);
    const chooseVehiclePanel = useRef(null);
    const confirmRidePanelRef = useRef(null);
    const confirmedTripRef = useRef(null);

    const navigate = useNavigate();

    const liveMap = useRef(null);
    const {
        findTripComponentOpen,
        chooseVehiclePanelOpen,
        lookingForDriverComponentOpen,
        setLookingForDriverComponentOpen,
        confirmTripComponentOpen,
        setConfirmTripComponentOpen,
    } = useContext(PassengerDataContext);

    useEffect(() => {
        socket.on("message_from_server", (data) => {
            if (data.obj.message === "driver_accepted_ride") {
                setLookingForDriverComponentOpen(false);
                setConfirmTripComponentOpen(true);
            }
        });
    }, [socket]);

    

    useGSAP(() => {
        if (findTripComponentOpen) {
            gsap.to(searchPanel.current, {
                bottom: "",
                top: "0%",
                height: "100vh",
            });
        } else {
            gsap.to(searchPanel.current, {
                top: "",
                bottom: "0%",
                height: "auto",
            });
        }
    }, [findTripComponentOpen]);

    useGSAP(() => {
        if (lookingForDriverComponentOpen) {
            gsap.to(confirmRidePanelRef.current, {
                top: "",
                bottom: "0",
                display: "block",
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                top: "100%",
                bottom: "",
                display: "none",
            });
        }
    }, [lookingForDriverComponentOpen]);

    useGSAP(() => {
        if (chooseVehiclePanelOpen) {
            gsap.to(chooseVehiclePanel.current, {
                top: "",
                bottom: "0%",
                display: "block",
            });
        } else {
            gsap.to(chooseVehiclePanel.current, {
                top: "100%",
                bottom: "",
                display: "none",
            });
        }
    }, [chooseVehiclePanelOpen]);

    useGSAP(() => {
        if (confirmTripComponentOpen) {
            gsap.to(confirmedTripRef.current, {
                top: "",
                bottom: "0%",
                display: "block",
            });
        } else {
            gsap.to(confirmedTripRef.current, {
                top: "100%",
                bottom: "",
                display: "none",
            });
        }
    }, [confirmTripComponentOpen]);

    const passengerLogout = () => {
        Cookies.remove("token");
        navigate("/passenger-login");
    };

    return (
        <>
            <div>
                <div ref={liveMap} className="relative">
                    <img
                        className="absolute top-3 left-3 w-1/4"
                        src={uberLogoBlack}
                        alt=""
                    />
                    <span
                        onClick={() => {
                            passengerLogout();
                        }}
                        className="absolute top-3 right-5 text-3xl"
                    >
                        <TbLogout />
                    </span>
                    <img
                        className=" h-screen"
                        src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-unexpected-pullover.jpg"
                        alt=""
                    />
                    {/* <LiveTracking/> */}
                </div>
                <div
                    ref={searchPanel}
                    className=" bg-white absolute left-0"
                    style={{ bottom: "0%", height: "auto" }}
                >
                    <FindTripComponent />
                </div>
                <div
                    ref={chooseVehiclePanel}
                    className="bg-white  absolute left-0 "
                    style={{ top: "100%", height: "auto" }}
                >
                    <ChooseVehicleComponent />
                </div>
                <div
                    ref={confirmRidePanelRef}
                    className="bg-white  absolute left-0 "
                >
                    <LookingForDriver />
                </div>
                <div
                    ref={confirmedTripRef}
                    className="bg-white  absolute left-0 "
                >
                    <ConfirmedTrip />
                </div>
            </div>
        </>
    );
};

export default PassengerHome;
