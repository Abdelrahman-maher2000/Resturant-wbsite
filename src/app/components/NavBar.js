import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {
    let user = false;
    return (
        <>
            <div className="d-flex align-items-center justify-content-between text-danger px-5 py-3 border-2 border-bottom border-danger text-uppercase">
                <div className="links">
                    <Link
                        href={"/"}
                        className="text-decoration-none text-danger fs-5"
                    >
                        Home Page
                    </Link>
                    <Link
                        href={"/menu"}
                        className="text-decoration-none text-danger fs-5"
                    >
                        Menu
                    </Link>
                    <Link
                        href={"/"}
                        className="text-decoration-none text-danger fs-5"
                    >
                        Contact
                    </Link>
                </div>

                {/* =LOGO= */}
                <div>
                    <Link
                        className="text-decoration-none text-danger fs-5 fw-bold"
                        href={"/"}
                    >
                        Massimo
                    </Link>
                </div>
                {/* =LOGO= */}

                <div className="links">
                    <div
                        className="d-flex align-items-center gap-2 px-2 rounded-3"
                        style={{ backgroundColor: "orange" }}
                    >
                        <img
                            src={"/phone.png"}
                            width={20}
                            height={20}
                        />
                        <span>123 456 789</span>
                    </div>
                    {!user ? (
                        <Link
                            href={"/login"}
                            className="text-decoration-none text-danger fs-5"
                        >
                            Login
                        </Link>
                    ) : (
                        <Link
                            href={"/orders"}
                            className="text-decoration-none text-danger fs-5"
                        >
                            orders
                        </Link>
                    )}

                    <CartIcon color={"text-danger"} />
                </div>

                {/* =Mobile Menu= */}
                <div className="menu">
                    <Menu />
                </div>
                {/* =Mobile Menu= */}
            </div>
        </>
    );
};

export default NavBar;
