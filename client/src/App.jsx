import React from "react";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingBar from "react-top-loading-bar";
import portfolioData from "./data/portfolioData";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter as Router,
    Outlet,
    Link,
    useNavigate,
} from "react-router-dom";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import SinglePortfolio from "./pages/portfolio/SinglePortfolio";

function App() {
    return (
        <Router>
            <ToastContainer />
            <Routes>
                <Route
                    element={
                        <div className="scroll-smooth antialiased flex flex-col min-h-screen  ">
                            <div className="w-full  fixed top-0 z-40">
                                <div className="z-40">
                                    {" "}
                                    <Navbar portfolioData={portfolioData} />
                                </div>
                            </div>
                            <Outlet /> <div className="flex-grow"></div>
                            <div className=" bottom-0  w-full" id="footer">
                                <Footer portfolioData={portfolioData} />
                            </div>
                        </div>
                    }
                >
                    <Route element={<Home />} path="/" />
                    <Route element={<Contact />} path="/contact" />
                    <Route element={<About />} path="/about" />
                    <Route
                        element={<Portfolio portfolioData={portfolioData} />}
                        path="/portfolio"
                    />{" "}
                    <Route
                        element={<SinglePortfolio portfolioData={portfolioData} />}
                        path="/portfolio/:title"
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
