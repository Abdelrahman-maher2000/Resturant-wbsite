import { singleProduct } from "@/app/components/data";
import Price from "@/app/components/Price";
import React from "react";

const SingleProuduct = () => {
    return (
        <>
            <section
                className="p-4 text-danger product"
                style={{ height: "100vh" }}
            >
                <div className="productImage">
                    <img src={singleProduct.img} />
                </div>
                <div className="productOrders">
                    <h1 className="fw-bolder text-uppercase">
                        {singleProduct.title}
                    </h1>
                    <p>{singleProduct.desc}</p>
                    <Price
                        price={singleProduct.price}
                        id={singleProduct.id}
                        options={singleProduct.options}
                    />
                </div>
            </section>
        </>
    );
};

export default SingleProuduct;
