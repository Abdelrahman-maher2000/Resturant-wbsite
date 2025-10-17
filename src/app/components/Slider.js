"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg",
    },
];

const Slider = () => {
    let [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === data.length - 1 ? 0 : prev + 1
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div
                className="row slider my-2"
                style={{ width: "100%" }}
            >
                {/* ==Text Container== */}
                <div className="col-sm-12 col-md-6 cont d-flex align-items-center justify-content-center gap-5 flex-column text-danger fw-bold">
                    <h1 className="text-uppercase text-center px-2 slidertitle">
                        {data[currentSlide].title}
                    </h1>
                    <button className="fw-bold btn btn-danger mb-5">
                        Order Now
                    </button>
                </div>
                {/* ==Text Container== */}

                {/* ==Image Container== */}
                <div
                    className=" col-sm-12 col-md-6 cont"
                    style={{ overflow: "hidden" }}
                >
                    <img
                        src={data[currentSlide].image}
                        alt="Slide"
                        className="img-fluid image1"
                    />
                </div>
                {/* ==Image Container== */}
            </div>
        </>
    );
};

export default Slider;
