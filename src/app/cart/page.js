import React from "react";

const CartPage = () => {
    return (
        <>
            <section id="cart" className="text-danger">
                <div className="productscontainer">
                    <div className="singleItem">
                        <div className="itemimg">
                            <img
                                src={"/temporary/p1.png"}
                                // className="img-fluid"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <h1 className="text-uppercase">
                                sicilian
                            </h1>
                            <span>Large</span>
                        </div>
                        <h2 className="mb-0 fw-bold">$79.90</h2>
                        <button className="btn fw-bold text-danger">
                            X
                        </button>
                    </div>
                    <div className="singleItem">
                        <div className="itemimg">
                            <img
                                src={"/temporary/p1.png"}
                                // className="img-fluid"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <h1 className="text-uppercase">
                                sicilian
                            </h1>
                            <span>Large</span>
                        </div>
                        <h2 className="mb-0 fw-bold">$79.90</h2>
                        <button className="btn fw-bold text-danger">
                            X
                        </button>
                    </div>
                    <div className="singleItem">
                        <div className="itemimg">
                            <img
                                src={"/temporary/p1.png"}
                                // className="img-fluid"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <h1 className="text-uppercase">
                                sicilian
                            </h1>
                            <span>Large</span>
                        </div>
                        <h2 className="mb-0 fw-bold">$79.90</h2>
                        <button className="btn fw-bold text-danger">
                            X
                        </button>
                    </div>
                </div>
                <div className="paymentContainer">
                    <div className="d-flex justify-content-between">
                        <span>Subtotal (3 items)</span>
                        <span>$81.7</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Service Cost</span>
                        <span>$0.0</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Delivery Cost</span>
                        <span className="text-success">FREE</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span>Total Cost</span>
                        <span className="fw-bold">$81.7</span>
                    </div>
                    <button className="btn btn-danger align-self-end">
                        Checkout
                    </button>
                </div>
            </section>
        </>
    );
};

export default CartPage;
