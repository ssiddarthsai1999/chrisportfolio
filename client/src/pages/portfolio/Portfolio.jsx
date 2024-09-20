import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PortfolioCard from "../../components/cards/Portfolio/PortfolioCard";

gsap.registerPlugin(ScrollToPlugin);

function Portfolio({ portfolioData }) {


    return (
        <div className="pt-[150px] relative">
            {/* Main Content Section */}
            <div className="flex flex-col mx-auto w-full items-center">
                <h1 className="font-bold text-[90px]">My Portfolio</h1>
                <p className="text-center w-[50%] text-[40px]">
                    Welcome to my portfolio. Here you’ll find a selection of my
                    work. Explore my projects to learn more about what I do.
                </p>
            </div>

            <div className="pt-[200px]">
                {/* Dynamically map through portfolio data */}
                {portfolioData.portfolio.map((item, index) => (
                    <div  key={index}>
                        <PortfolioCard x={item} index={index} />
                    </div>
                ))}
            </div>

            {/* Thumbnails Sidebar Section */}
        </div>
    );
}

export default Portfolio;
