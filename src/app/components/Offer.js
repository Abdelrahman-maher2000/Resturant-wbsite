import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
    return (
        <>
            <section
                id="offer"
                className="bg-black text-white"
                style={{ height: "100vh" }}
            >
                <div
                    className="row h-100 "
                    style={{
                        padding: "1.5rem",
                        width: "99%",
                    }}
                >
                    {/* ==Text Container== */}
                    <div
                        className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center"
                        style={{ gap: "2rem" }}
                    >
                        <h1 style={{ fontSize: "3rem" }}>
                            Delicious Burger & French Fry
                        </h1>
                        <p className="fs-5">
                            Progressively simplify effective e-toilers
                            and process-centric methods of
                            empowerment. Quickly pontificate parallel.
                        </p>
                        <CountDown />
                        <button className="btn-danger btn text-white fs-4">
                            Order now
                        </button>
                    </div>
                    {/* ==Text Container== */}

                    {/* ==Image Container== */}
                    <div className="position-relative col-sm-12 col-md-6 d-flex align-items-center justify-content-center burger">
                        <img
                            src={"/offerProduct.png"}
                            alt="offerPng"
                            className="img-fluid"
                        />
                    </div>
                </div>
                {/* ==Image Container== */}
            </section>
        </>
    );
};

export default Offer;
