import React from "react";
import { menu } from "../components/data";
import Link from "next/link";

const Menu = () => {
    return (
        <>
            <section id="menu">
                {menu.map((e) => {
                    return (
                        <div
                            key={e.id}
                            className="menu-item"
                            style={{
                                backgroundImage: `url(${e.img})`,
                                backgroundSize: "cover",
                                width: "100%",
                                padding: "2rem",
                            }}
                        >
                            <Link
                                href={`/menu/${e.slug}`}
                                className="text-decoration-none text-black d-flex flex-column h-100 justify-content-between"
                            >
                                <div className={`text-${e.color}`}>
                                    <h1 className="text-uppercase">
                                        {e.title}
                                    </h1>
                                    <p className="mt-3">{e.desc}</p>
                                </div>
                                <button
                                    className="btn btn-outline-dark"
                                    style={{ width: "fit-content" }}
                                >
                                    Explore
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default Menu;
