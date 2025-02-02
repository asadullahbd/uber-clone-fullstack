import React, { useEffect } from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import axios from "axios";

const DriverDetails = () => {
    const [driverDetails, setDriverDetails] = React.useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/driver/profile`,
                    { withCredentials: true }
                );
                setDriverDetails(response.data);
            } catch (error) {
                console.error(`error fetching driver details`, error);
            }
        })();
    }, []);

    return (
        <>
            {driverDetails ? <div className="flex flex-col gap-7 p-7">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            className="w-1/6 rounded-full"
                            src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <h3 className="font-semibold text-lg">
                            {driverDetails.driver.name}
                        </h3>
                    </div>
                    <div>
                        <h3 className="font-bold">$295.60</h3>
                        <p className="opacity-90">Earned</p>
                    </div>
                </div>
                <div className="flex justify-between items-center  p-2 rounded-md bg-[#eee]">
                    <div className="flex items-center flex-col gap-1">
                        <span>
                            <MdAccessTimeFilled />
                        </span>
                        <h5 className="font-semibold">10.2</h5>
                        <p>Hours Online</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <span>
                            <MdAccessTimeFilled />
                        </span>
                        <h5 className="font-semibold">10.2</h5>
                        <p>Hours Online</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <span>
                            <MdAccessTimeFilled />
                        </span>
                        <h5 className="font-semibold">10.2</h5>
                        <p>Hours Online</p>
                    </div>
                </div>
            </div> : <div>
                    <button
                        disabled
                        type="button"
                        className="text-black font-medium rounded-lg text-md  py-2.5 text-center me-2 inline-flex items-center"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-black animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                            />
                        </svg>
                        Loading...
                    </button>
                </div>}
        </>
    );
};

export default DriverDetails;
