"use client";

import { pizzas } from "@/app/components/data";
import Link from "next/link";
import React, { useEffect } from "react";

const CategoryPage = () => {
    return (
        <>
            <div
                className="row pizzacontainer text-danger"
                style={{ width: "99vw" }}
            >
                {pizzas.map((e) => {
                    return (
                        <div
                            className="col-sm-12 col-md-6 col-lg-4 border border-danger border-bottom border-end"
                            key={e.id}
                        >
                            <Link
                                href={`/products/${e.id}`}
                                className="pizzaslink text-danger text-decoration-none flex-column d-flex justify-content-between p-4"
                                style={{ height: "60vh" }}
                            >
                                <div className="h-75">
                                    <img
                                        src={e.img}
                                        className="img-fluid text-center"
                                        style={{
                                            maxHeight: "100%",
                                        }}
                                    />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p
                                        className="fw-bold"
                                        style={{
                                            fontSize: "17px",
                                        }}
                                    >
                                        {e.title}
                                    </p>
                                    <p className="pizzacartprice fw-bold">
                                        ${e.price}
                                    </p>
                                    <button className="btn btn-danger pizzacartbutton">
                                        Add To Cart
                                    </button>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CategoryPage;
