"use client";

import React from "react";
import Countdown from "react-countdown";

const endingdate = new Date("2025-10-01");

const CountDown = () => {
    return (
        <div>
            <Countdown
                date={endingdate}
                className="fs-1 fw-bold text-warning"
            />
        </div>
    );
};

export default CountDown;
