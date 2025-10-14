import React from "react";

import { featuredProducts } from "./data";

const Featured = () => {
    return (
        <>
            <section
                className="overflow-x-scroll text-danger"
                id="featured"
            >
                {/* ==Wrapper== */}
                <div
                    className="wrapper"
                    style={{ width: "fit-content" }}
                >
                    {/* ==Single Item== */}
                    {featuredProducts.map((item) => {
                        return (
                            <div
                                className="item my-2 py-2"
                                key={item.id}
                            >
                                {/* ==Image Container== */}
                                <div
                                    className="position-relative Image-Container"
                                    style={{
                                        flex: "1",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="img-fluid"
                                        style={{
                                            maxWidth: "80%",
                                            maxHeight: "80%",
                                        }}
                                    />
                                </div>
                                {/* ==Image Container== */}

                                {/* ==Text Container== */}
                                <div
                                    style={{ flex: "1" }}
                                    className="d-flex align-items-center justify-content-center flex-column mt-3"
                                >
                                    <h1
                                        style={{
                                            fontWeight: "800",
                                            fontSize: "25px",
                                            letterSpacing: 2,
                                        }}
                                        className="text-uppercase mb-4"
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                    <div className="d-flex flex-column gap-2 align-items-center">
                                        <span
                                            style={{
                                                fontSize: "18px",
                                            }}
                                        >
                                            ${item.price}
                                        </span>
                                        <button
                                            className="btn btn-danger"
                                            style={{
                                                width: "fit-content",
                                            }}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                                {/* ==Text Container== */}
                            </div>
                        );
                    })}
                    {/* ==Single Item== */}
                </div>
                {/* ==Wrapper== */}
            </section>
        </>
    );
};

export default Featured;
