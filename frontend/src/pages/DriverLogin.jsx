import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const DriverLogin = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/driver/login`,
                {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }
            );
            Cookies.set("token", response.data.token, { expires: 30, secure: true, sameSite: "strict" });
            navigate("/driver-home");
        } catch (error) {
            console.log(error);
            alert("Invalid Credentials");
        }
    };
    return (
        <>
            <div className="p-7 h-screen w-full flex flex-col bg-[#ffffff] justify-between items-center">
                <div>
                    <img className="w-1/4 mb-8" src="https://w7.pngwing.com/pngs/636/735/png-transparent-logo-uber-brand-design-text-logo-engineering-thumbnail.png" alt="" />
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <div className="mb-4">
                            <label
                                className="block text-lg font-semibold mb-2"
                                htmlFor="email"
                            >
                                What's Your Email
                            </label>
                            <input
                                className="w-full py-2 rounded px-2 mb-2 bg-[#eee]"
                                placeholder="example@email.com"
                                type="email"
                                name="email"
                                ref={emailRef}
                                required
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
                                className="w-full py-2 rounded px-2 mb-2 bg-[#eee]"
                                placeholder="password"
                                type="password"
                                name="password"
                                ref={passwordRef}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 rounded w-full bg-black py-2 text-white block text-center font-semibold"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-2 text-center">
                        New here?{" "}
                        <Link
                            to={"/driver-signup"}
                            className="text-blue-600"
                        >
                            Create new account
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <Link to={"/passenger-login"} className=" mt-2 rounded w-full bg-[#10B461] py-2 text-white block text-center font-semibold">
                        Sign in as Passenger
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DriverLogin;
