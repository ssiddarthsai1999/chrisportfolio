import React from "react";
import { Link } from "react-router-dom";

function Navbar({ portfolioData }) {
    const navItems = portfolioData.navItems;

    return (
        <div className="bg-gray-300 p-4 flex justify-between items-center px-24">
            <div className="flex gap-5 items-center">
                <img
                    className="w-10"
                    src="https://images.seeklogo.com/logo-png/52/1/team-liquid-logo-png_seeklogo-528696.png?v=638475860110000000"
                    alt=""
                />
                <div className="flex items-center gap-2 ">
                    <h3 className="font-bold text-[22px]">Captain Chris</h3>
                    <h3 className="font-thin text-[18px]">Graphic Designer</h3>
                </div>
            </div>
            <div className="flex gap-6 items-center ">
                {navItems.map((x) =>
                    x.linkTo ? (
                        <a
                            href={x.linkTo}
                            key={x.id}
                            className="flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h5 className="text-[16px]">{x.name}</h5>
                        </a>
                    ) : (
                        <Link
                            to={x.directTo}
                            key={x.id}
                            className="flex items-center "
                        >
                            <h5 className="text-[16px]">{x.name}</h5>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}

export default Navbar;
