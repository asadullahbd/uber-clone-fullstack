import React, { useContext, useEffect, useRef } from "react";

import LiveTracking from "../components/LiveTracking";

import uberLogoBlack from "../assets/image/uber-logo-black.png";
import { TbLogout } from "react-icons/tb";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import DriverDetails from "../components/DriverDetails";
import { DriverDataContext } from "./../context/DriverContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NewRidePanel from "../components/NewRidePanel";
import OngoingRide from "../components/OngoingRide";
import FinishRide from "../components/FinishRide";

import io from "socket.io-client";
const socket = io.connect(`http://localhost:4100`)

const DriverHome = () => {
    const {
        driverDetailsOpen,
        newRidePanelOpen,
        setNewRidePanelOpen,
        ongoingRidePanelOpen,
        finishRidePanelOpen,
    } = useContext(DriverDataContext);

    useEffect(() => {
        socket.on("message_from_server", (data) => {
            if(data.message === "searching_driver"){
                setNewRidePanelOpen(true);
            }
            if(data.message === "driver_accepted_ride"){
                setNewRidePanelOpen(false);
            }
        });
    }, [socket]);

    const liveMap = useRef(null);
    const driverDetailsRef = useRef(null);
    const newRidePanelRef = useRef(null);
    const ongoingRideRef = useRef(null);
    const finishRideRef = useRef(null);

    const navigate = useNavigate();

    const driverLogout = () => {
        Cookies.remove("token");
        navigate("/driver-login");
    };

    useGSAP(() => {
        if (driverDetailsOpen) {
            gsap.to(driverDetailsRef.current, {
                bottom: "0",
                top: "",
                display: "block",
            });
        } else {
            gsap.to(driverDetailsRef.current, {
                bottom: "",
                top: "100%",
                display: "none",
            });
        }
    }, [driverDetailsOpen]);

    useGSAP(() => {
        if (newRidePanelOpen) {
            gsap.to(newRidePanelRef.current, {
                bottom: "0",
                top: "",
                display: "block",
            });
        } else {
            gsap.to(newRidePanelRef.current, {
                bottom: "",
                top: "100%",
                display: "none",
            });
        }
    }, [newRidePanelOpen]);

    useGSAP(() => {
        if (ongoingRidePanelOpen) {
            gsap.to(ongoingRideRef.current, {
                bottom: "0",
                top: "",
                display: "block",
            });
        } else {
            gsap.to(ongoingRideRef.current, {
                bottom: "",
                top: "100%",
                display: "none",
            });
        }
    }, [ongoingRidePanelOpen]);

    useGSAP(() => {
        if (finishRidePanelOpen) {
            gsap.to(finishRideRef.current, {
                bottom: "0",
                top: "",
                display: "block",
            });
        } else {
            gsap.to(finishRideRef.current, {
                bottom: "",
                top: "100%",
                display: "none",
            });
        }
    }, [finishRidePanelOpen]);

    return (
        <>
            <div className="relative">
                <div ref={liveMap} className="relative">
                    <img
                        className="absolute top-3 left-3 w-1/4"
                        src={uberLogoBlack}
                        alt=""
                    />
                    <span
                        onClick={() => {
                            driverLogout();
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
                    ref={driverDetailsRef}
                    className="bg-white absolute left-0 w-full"
                >
                    <DriverDetails />
                </div>
                <div
                    ref={newRidePanelRef}
                    className="bg-white absolute left-0 w-full"
                >
                    <NewRidePanel />
                </div>
                <div
                    ref={ongoingRideRef}
                    className="bg-yellow-400 absolute left-0 w-full"
                >
                    <OngoingRide />
                </div>
                <div
                    ref={finishRideRef}
                    className="bg-white absolute left-0 w-full"
                >
                    <FinishRide />
                </div>
            </div>
        </>
    );
};

export default DriverHome;
