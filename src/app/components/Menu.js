"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
    { id: 1, title: "Home Page", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    let user = false;
    let [open, setOpen] = useState(false);
    return (
        <>
            {!open ? (
                <Image
                    src={"/open.png"}
                    width={20}
                    height={20}
                    alt="open"
                    onClick={() => setOpen(true)}
                />
            ) : (
                <img
                    src={"/close.png"}
                    onClick={() => setOpen(false)}
                />
            )}

            {open && (
                <div
                    className="menu-links position-absolute bg-danger text-white d-flex justify-content-center align-items-center flex-column gap-4 w-100"
                    style={{
                        left: "0",
                        height: "87vh",
                        zIndex: "100",
                    }}
                >
                    {links.map((item) => {
                        return (
                            <>
                                <Link
                                    href={item.url}
                                    key={item.id}
                                    className="text-decoration-none text-white fs-4"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </>
                        );
                    })}
                    {!user ? (
                        <Link
                            href={"/login"}
                            className="text-decoration-none text-white fs-4"
                            onClick={() => setOpen(false)}
                        >
                            Login
                        </Link>
                    ) : (
                        <Link
                            href={"/orders"}
                            className="text-decoration-none text-white fs-4"
                            onClick={() => setOpen(false)}
                        >
                            Orders
                        </Link>
                    )}

                    <CartIcon
                        color={"text-white"}
                        // onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </>
    );
};

export default Menu;
