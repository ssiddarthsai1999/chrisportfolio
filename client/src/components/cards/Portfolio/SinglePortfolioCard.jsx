import React from "react";
import { Link } from "react-router-dom";

function SinglePortfolioCard({ x, index }) {
    const isEven = index % 2 === 0; // Determine if the index is even or odd

    return (
        <div className="flex h-[90vh]">
            {isEven ? (
                <>
                    <div className="w-1/2 bg-red-200 h-full overflow-hidden">
                        <video
                            src={x.video}
                            className="object-cover h-full w-full "
                            autoPlay
                            loop
                            muted
                            alt={x.title}
                        />
                    </div>
                    <div className="w-1/2 h-full items-center justify-center flex">
                        <h1 className="text-center font-bold">{x.title}</h1>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/2 h-full items-center justify-center flex">
                        <h1 className="text-center font-bold">{x.title}</h1>
                    </div>
                    <div className="w-1/2 bg-red-200 h-full overflow-hidden">
                        <video
                            src={x.video}
                            className="object-cover h-full w-full "
                            autoPlay
                            loop
                            muted
                            alt={x.title}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default SinglePortfolioCard;
