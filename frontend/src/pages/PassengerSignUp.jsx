import React, {  useRef } from "react";
import uberBlackLogo from "../assets/image/uber-logo-black.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const PassengerSignUp = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    
    const submitHandler = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/passenger/signup`,
                {
                    name,
                    email,
                    password,
                }
            );

            Cookies.set("token", response.data.token, { expires: 30, secure: true, sameSite: "strict" });
            
            navigate("/passenger-home");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="p-7 h-screen w-full flex flex-col bg-[#ffffff] justify-between items-center">
                <div>
                    <img className="w-1/4 mb-8" src={uberBlackLogo} alt="" />
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
                                What's Your Name
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
                                What's Your Email
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
                        {/* <Link  className='mt-2 rounded w-full bg-black py-2 text-white block text-center font-semibold'>Create account</Link> */}
                        <button
                            type="submit"
                            className="mt-2 rounded w-full bg-black py-2 text-white block text-center font-semibold"
                        >
                            Create account
                        </button>
                    </form>
                    <p className="mt-2 text-center">
                        Already have account?
                        <Link
                            to={"/passenger-login"}
                            className="text-blue-600"
                        >
                            Login here
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <Link className=" mt-2 rounded w-full bg-[#10B461] py-2 text-white block text-center font-semibold">
                        Sign in as Driver
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PassengerSignUp;
