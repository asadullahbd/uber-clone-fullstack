import React, { useContext, useEffect, useRef, useState } from "react";
import FindTripComponent from "../components/FindTripComponent";
import LiveTracking from "../components/LiveTracking";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PassengerDataContext } from "../context/PassengerContext";
import uberLogoBlack from "../assets/image/uber-logo-black.png"
import { TbLogout } from "react-icons/tb";
import Cookies from "js-cookie";

const PassengerHome = () => {
    const searchPanel = useRef(null);
    const liveMap = useRef(null);
    const [panelOpen, setPanelOpen] = useContext(PassengerDataContext);

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(searchPanel.current, {
                bottom:"",
                top:"0%",
                height:"100vh"
            });
        } else{
            gsap.to(searchPanel.current, {
                top:"",
                bottom:"0%",
                height:"auto"
            });
        }
    }, [panelOpen]);

    const passengerLogout = () => {
        Cookies.remove("token");
        window.location.reload();
    }

    return (
        <>
            <div>
                <div
                    ref={liveMap}
                    className="relative"
                >
                    <img className="absolute top-3 left-3 w-1/4" src={uberLogoBlack} alt="" />
                    <span onClick={()=>{
                        passengerLogout();
                    }} className="absolute top-3 right-5 text-3xl"  ><TbLogout /></span>
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
                    style={{bottom:"0%",height:"auto"}}
                >
                    <FindTripComponent />
                </div>
            </div>
        </>
    );
};

export default PassengerHome;


