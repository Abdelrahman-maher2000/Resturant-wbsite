"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = ({ color }) => {
    return (
        <>
            <Link
                href={"/cart"}
                className={`text-decoration-none ${color} fs-4 d-flex gap-4`}
            >
                <div
                    className=" position-relative"
                    style={{
                        height: "32px",
                        width: "32px",
                    }}
                >
                    <img src={"/cart.png"} className="img-fluid" />
                </div>
                <span>Cart (3)</span>
            </Link>
        </>
    );
};

export default CartIcon;
