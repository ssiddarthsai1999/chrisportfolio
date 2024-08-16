import React from "react";
import PortfolioCard from "../../components/cards/Portfolio/PortfolioCard";

function Portfolio({ portfolioData }) {
    const portfolio = portfolioData.portfolio;
    return (
        <div className="pt-[150px]">
            <div className=" flex flex-col mx-auto w-full items-center">
                {" "}
                <h1 className="font-bold text-[90px]">My Portfolio</h1>
                <p className="text-center w-[50%] text-[40px]">
                    Welcome to my portfolio. Here you’ll find a selection of my
                    work. Explore my projects to learn more about what I do.
                </p>
            </div>
            <div className="pt-[200px]">
                {portfolio.map((x,index) => (
                    <PortfolioCard x={x} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
