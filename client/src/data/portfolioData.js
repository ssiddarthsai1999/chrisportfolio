// portfolioData.js
import grave from "../assets/portfolio/grave.mp4";
import slice from "../assets/portfolio/slice.mp4";
import freeway from "../assets/portfolio/freeway.mp4";
import gravity from "../assets/portfolio/gravity.mp4";
import ocean from "../assets/portfolio/ocean.mp4";
import sugar from "../assets/portfolio/sugar.mp4";
import zen from "../assets/portfolio/zen.mp4";
import pitfall from "../assets/portfolio/pitfall.mp4";
import puzzle from "../assets/portfolio/puzzle.mp4";

import bubble from "../assets/portfolio/bubble.mp4";
import hyper from "../assets/portfolio/hyper.mp4";
import roll from "../assets/portfolio/roll.mp4";
import word from "../assets/portfolio/word.mp4";
import dig from "../assets/portfolio/dig.mp4";
import wordscavenger from "../assets/portfolio/wordscavenger.mp4";
const portfolioData = {
    navItems: [
        {
            id: 1,
            name: "Home",
            directTo: "/",
        },
        {
            id: 2,
            name: "Resume",

            linkTo: "https://www.youtube.com/watch?v=aF7lCDVRQRw&list=RDMM&index=22",
        },
        {
            id: 3,
            name: "Portfolio",
            directTo: "/portfolio",
        },
        {
            id: 4,
            name: "Contact",
            directTo: "/contact",
        },
    ],
    userDescription: [
        {
            id: 1,
            profilePic:
                "https://variety.com/wp-content/uploads/2019/11/chris-evans-feat-image.jpg?w=1000",
            name: "Captain Chris",
            job: "Graphic Designer",
        },
    ],
    portfolio: [
        {
            id: 1,
            scrollTo: "Game ",
            title: "Game ",
            description: "",
            logo: "https://media.licdn.com/dms/image/v2/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=rLMZ59ByIABpdPtfPZPZC65iXWG4zbht2eqKfWOdxRs",
            assets: [
                {
                    id: 1,
                    title: "Grave Guardian",
                    video: grave,
                },
                {
                    id: 2,
                    title: "Slice Master",
                    video: slice,
                },
                {
                    id: 3,
                    title: "Freeway Fury",
                    video: freeway,
                },
                {
                    id: 4,
                    title: "Gravity Dunk",
                    video: gravity,
                },
                {
                    id: 5,
                    title: "Ocean Dash",
                    video: ocean,
                },
                {
                    id: 6,
                    title: "Sugar Haven",
                    video: sugar,
                },
                {
                    id: 7,
                    title: "Zen Tile Quest",
                    video: zen,
                },
                {
                    id: 8,
                    title: "Pitfall Runner",
                    video: pitfall,
                },
                {
                    id: 9,
                    title: "Puzzle Sync",
                    video: puzzle,
                },
                {
                    id: 10,
                    title: "Bubble Blast",
                    video: bubble,
                },
                {
                    id: 11,
                    title: "Hyper Drive",
                    video: hyper,
                },
                {
                    id: 12,
                    title: "Roll Escape",
                    video: roll,
                },
                {
                    id: 13,
                    title: "Word Linker",
                    video: word,
                },
                {
                    id: 14,
                    title: "Dig Deep",
                    video: dig,
                },
                {
                    id: 15,
                    title: "Word Scavenger",
                    video: wordscavenger,
                },
            ],
        },
        {
            id: 2,
            title: "Website ",
            scrollTo: "Website",
            description: "",
            logo: "https://5.imimg.com/data5/SELLER/Default/2023/6/319605360/SS/CX/HM/781420/logo-design-service.jpg",
        },
    ],
};

export default portfolioData;
