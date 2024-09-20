import React from "react";
import { useParams } from "react-router-dom";
import SinglePortfolioCard from "../../components/cards/Portfolio/SinglePortfolioCard";

function SinglePortfolio({ portfolioData }) {
    const { title } = useParams(); // Extract the title from the URL params

    // Find the portfolio item based on the title from the URL params
    const portfolioItem = portfolioData.portfolio.find(
        (x) => x.title.toLowerCase().trim() === title.toLowerCase().trim()
    );

    // If no portfolio item is found, return a fallback
    if (!portfolioItem) {
        return <div>Portfolio item not found</div>;
    }

    return (
        <div className="pt-[150px] relative">
            {/* Main Content Section */}
            <div className="flex flex-col mx-auto w-full items-center">
                <h1 className="font-bold text-[90px]">{portfolioItem.title}</h1>
                <p className="text-center w-[50%] text-[40px]">
                    {portfolioItem.description ||
                        "Explore my projects to learn more about what I do."}
                </p>
            </div>

            <div className="pt-[200px]">
                {/* Make sure to return the JSX inside the map function */}
                {portfolioItem.assets.map((x, index) => (
                    <SinglePortfolioCard
                        key={x.id}
                        x={x}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default SinglePortfolio;
