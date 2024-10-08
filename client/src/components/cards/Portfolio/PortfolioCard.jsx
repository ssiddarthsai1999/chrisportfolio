import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
function PortfolioCard({ x, index }) {
    const isEven = index % 2 === 0; // Determine if the index is even or odd

    return (
        <Link to={`/portfolio/${x.title}`}>
            <div className="flex h-[50vh]  ">
                {isEven ? (
                    <>
                        <div className="w-1/2 bg-red-200 h-full overflow-hidden">
                            <img
                                src={x.logo}
                                className="object-cover h-full w-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div className="w-1/2 h-full items-center justify-center flex">
                            <h1 className="text-center font-bold">{x.title}</h1>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-1/2 h-full items-center justify-center flex">
                            <h1 className="text-center font-bold ">
                                {x.title}
                            </h1>
                        </div>
                        <div className="w-1/2 bg-red-200 h-full overflow-hidden">
                            <img
                                src={x.logo}
                                className="object-cover h-full w-full transform transition-transform duration-500 ease-in-out hover:scale-110 "
                                alt=""
                            />
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

export default PortfolioCard;
