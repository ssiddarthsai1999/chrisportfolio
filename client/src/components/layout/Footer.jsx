import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-gray-300 p-4 flex justify-between px-24">
            <div className="flex gap-2 items-center flex-col">
                <h3 className="font-bold text-[22px]">Phone</h3>
                <h3 className="font-thin text-[18px]">+91 9944 080 208</h3>
                <h3 className="font-thin text-[18px]">+91 9944 080 208</h3>
            </div>
            <div className=" gap-2 items-center flex flex-col">
                <h3 className="font-bold text-[22px]">Email</h3>
                <h3 className="font-thin text-[22px]">
                    raajesh20.10@gmail.com
                </h3>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h3 className="font-bold text-[22px]">Follow Me</h3>
                <div className="flex gap-3">
                    <a href="">
                        {" "}
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>

                    <a href="">
                        {" "}
                        <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
