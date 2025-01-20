import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";

const ConfirmedTrip = () => {
  return (
    <>
     <div className="flex flex-col gap-3 p-4">
                    <h2 className="text-2xl font-bold">i am driver</h2>
                    
                    <img
                        className="w-2/4 self-center"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
                        alt=""
                    />
                    <div className="flex items-center gap-3 border-b-2 pb-3">
                        <span className="text-xl">
                            <IoMdPerson />
                        </span>
                        <div>
                            <h4 className="font-semibold text-xl">1201/11A</h4>
                            <p className="text-lg">airport,dhaka</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-3 border-b-2 pb-3">
                        <span className="text-xl">
                            <IoLocationSharp />
                        </span>
                        <div>
                            <h4 className="font-semibold text-xl">1941/1</h4>
                            <p className="text-lg">Sakhipur,Tangail</p>
                        </div>
                    </div>
    
                    <div className="flex items-center gap-3">
                        <span className="text-xl">
                            <TbCoinTakaFilled />
                        </span>
                        <div>
                            <h4 className="font-semibold text-xl">$280</h4>
                            <p className="text-lg">Cash</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default ConfirmedTrip