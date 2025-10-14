import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
    return (
        <>
            <div
                id="login"
                style={{ height: "68vh" }}
                className="px-2"
            >
                <div className="boxcont">
                    <div className="loginimgcont position-relative">
                        <Image
                            src={"/loginBg.png"}
                            alt=""
                            fill
                            className="object-fit-cover"
                        />
                    </div>
                    <div className="formcont">
                        <h1 className="fw-bold">Welcome</h1>
                        <p>
                            Login into your account or create new one
                            using social buttons
                        </p>
                        <div className="d-flex flex-column gap-3">
                            <button
                                className="btn btn-outline-light border border-black text-black d-flex align-items-center gap-2"
                                style={{ width: "210px" }}
                            >
                                <img
                                    src={"/google.png"}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                                <span>Sign in with Google</span>
                            </button>
                            <button
                                className="btn btn-outline-light border border-primary text-black d-flex align-items-center gap-2"
                                style={{ width: "210px" }}
                            >
                                <img
                                    src={"/facebook.png"}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                                <span>Sign in with Facebook</span>
                            </button>
                        </div>
                        <p>
                            Have Proplem?{" "}
                            <Link
                                className="text-decoration-none fw-bold text-black"
                                href={"/"}
                            >
                                Contact us
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
