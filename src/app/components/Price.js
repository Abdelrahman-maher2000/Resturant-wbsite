"use client";

import React, { useEffect, useState } from "react";

const Price = ({ price, id, options }) => {
    const [active, setActive] = useState("Small");
    const [total, setTotal] = useState(price);
    const [quantity, setquantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotal(
            quantity *
                (options
                    ? price + options[selected].additionalPrice
                    : price)
        );
    }, [quantity, active, options, price]);

    return (
        <>
            <div className="d-flex flex-column gap-3">
                <div>
                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        ${total.toFixed(2)}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    {options.map((e, index) => {
                        return (
                            <button
                                key={id}
                                className={`btn`}
                                onClick={() => {
                                    setActive(e.title);
                                    setSelected(index);
                                }}
                                style={{
                                    color:
                                        active == e.title
                                            ? "white"
                                            : "#dc3545",
                                    backgroundColor:
                                        active == e.title
                                            ? "#dc3545"
                                            : "white",
                                    border: "1px solid red",
                                    borderRadius: "5px",
                                    minWidth: "6rem",
                                }}
                            >
                                {e.title}
                            </button>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-between w-100 gap-4">
                    <div className="quantity d-flex justify-content-between align-items-center px-2 flex-grow-1 border border-1 border-danger">
                        <span>Quantity</span>
                        <div className="d-flex align-items-center ">
                            <button
                                className="btn text-danger"
                                onClick={() => {
                                    if (quantity > 1) {
                                        setquantity((prev) => {
                                            return prev - 1;
                                        });
                                    }
                                }}
                            >
                                {"<"}
                            </button>
                            <span>{quantity}</span>
                            <button
                                className="btn text-danger"
                                onClick={() =>
                                    setquantity((prev) => {
                                        return prev + 1;
                                    })
                                }
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;
