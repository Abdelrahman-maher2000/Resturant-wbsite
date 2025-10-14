import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-between px-5 border-danger border-top border-bottom footer"
            style={{ height: "100px" }}
        >
            <Link
                className="text-decoration-none text-danger fs-5 fw-bold"
                href={"/"}
            >
                Massimo
            </Link>
            <p className="text-uppercase text-danger mb-0 ">
                All Riights Reserved
            </p>
        </div>
    );
};

export default Footer;
