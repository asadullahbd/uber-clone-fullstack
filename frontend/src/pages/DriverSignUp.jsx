import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const DriverSignUp = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const colorRef = useRef("");
    const plateRef = useRef("");
    const capacityRef = useRef("");
    const vehicleTypeRef = useRef("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const color = colorRef.current.value;
        const plate = plateRef.current.value;
        const capacity = capacityRef.current.value;
        const vehicleType = vehicleTypeRef.current.value;

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/driver/signup`,
                {
                    name,
                    email,
                    password,
                    vehicle: {
                        color,
                        plate,
                        capacity,
                        vehicleType,
                    },
                }
            );

            Cookies.set("token", response.data.token, {
                expires: 30,
                secure: true,
                sameSite: "strict",
            });

            navigate("/driver-home");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="p-7 h-screen w-full flex flex-col bg-[#ffffff] justify-between items-center">
                <div>
                    <img
                        className="w-1/4 mb-8"
                        src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png"
                        alt=""
                    />
                    <form
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                    >
                        <div className="mb-4">
                            <label
                                className="block text-lg font-semibold mb-2"
                                htmlFor="name"
                            >
                                Driver's Name
                            </label>
                            <input
                                required
                                ref={nameRef}
                                className="w-full py-2 rounded px-2 mb-2 bg-[#eee]"
                                placeholder="name"
                                type="text"
                                name="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-lg font-semibold mb-2"
                                htmlFor="email"
                            >
                                Driver's Email
                            </label>
                            <input
                                required
                                ref={emailRef}
                                className="w-full py-2 rounded px-2 mb-2 bg-[#eee]"
                                placeholder="example@email.com"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-lg font-semibold mb-2"
                                htmlFor="password"
                            >
                                Enter Password
                            </label>
                            <input
                                required
                                ref={passwordRef}
                                className="w-full py-2 rounded px-2 mb-2 bg-[#eee]"
                                placeholder="password"
                                type="password"
                                name="password"
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold mb-5">
                                Vehicle Information
                            </h2>
                            <div className="flex gap-3">
                                <input
                                    ref={colorRef}
                                    required
                                    className="w-1/2 py-2 rounded px-2 mb-3 bg-[#eee]"
                                    placeholder="Color?"
                                    type="text"
                                />
                                <input
                                    ref={plateRef}
                                    required
                                    className="w-1/2 py-2 rounded px-2 mb-3 bg-[#eee]"
                                    placeholder="Plate?"
                                    type="text"
                                />
                            </div>
                            <div className="flex gap-3">
                                <input
                                    ref={capacityRef}
                                    required
                                    className="w-1/2 py-2 rounded px-2 mb-3 bg-[#eee]"
                                    placeholder="Capacity?"
                                    type="number"
                                />
                                <select
                                    ref={vehicleTypeRef}
                                    required
                                    className="w-1/2 py-2 rounded px-2 mb-3 bg-[#eee]"
                                >
                                    <option value="">type?</option>
                                    <option value="car">car</option>
                                    <option value="bike">bike</option>
                                    <option value="cng">cng</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="my-5 rounded w-full bg-black py-2 text-white block text-center font-semibold"
                        >
                            Create driver account
                        </button>
                    </form>
                    <p className="mt-2 text-center">
                        Already have account?
                        <Link to={"/passenger-login"} className="text-blue-600">
                            Login here
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <Link
                        to={"/passenger-login"}
                        className=" mt-12 mb-4 rounded w-full bg-[#10B461] py-2 text-white block text-center font-semibold"
                    >
                        Sign in as Passenger
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DriverSignUp;
