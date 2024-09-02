import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PortfolioCard from "../../components/cards/Portfolio/PortfolioCard";

gsap.registerPlugin(ScrollToPlugin);

function Portfolio({ portfolioData }) {
    const portfolio = portfolioData.portfolio;

    // Refs for each section to scroll to
    const graphicDesignRef = useRef(null);
    const logoDesignRef = useRef(null);
    const uiuxDesignRef = useRef(null);

    const scrollToSection = (scrollTo) => {
        let targetRef;

        switch (scrollTo) {
            case "graphicDesign":
                targetRef = graphicDesignRef.current;
                break;
            case "logoDesign":
                targetRef = logoDesignRef.current;
                break;
            case "uiuxDesign":
                targetRef = uiuxDesignRef.current;
                break;
            default:
                return;
        }

        gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetRef, offsetY: 80 },
            ease: "power2.out",
        });
    };

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
                <div ref={graphicDesignRef}>
                    <PortfolioCard x={portfolio[0]} index={0} />
                </div>
                <div ref={logoDesignRef}>
                    <PortfolioCard x={portfolio[1]} index={1} />
                </div>
                <div ref={uiuxDesignRef}>
                    <PortfolioCard x={portfolio[2]} index={2} />
                </div>
            </div>

            {/* Thumbnails Sidebar Section */}
            <div className="fixed right-0 top-[50%] transform -translate-y-1/2  w-[10%] flex flex-col items-center">
                {portfolio.map((x, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center mb-4 cursor-pointer"
                        onClick={() => scrollToSection(x.scrollTo)}
                    >
                        <img
                            src={x.logo}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-24 mb-2 hover:opacity-75 max-h-14"
                        />
                        <p className="text-center text-sm">{x.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
