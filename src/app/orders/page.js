import React from "react";

const OrdersPage = () => {
    return (
        <>
            <div className="p-4 orders" style={{ height: "71vh" }}>
                <table width={"100%"}>
                    <thead>
                        <tr>
                            <th className="hid">Order Id</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th className="hid">Products</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="notde">
                            <td className="hid py-3 px-1">1234</td>
                            <td className="py-3 px-1">20.10.2023</td>
                            <td>$80.90</td>
                            <td className="hid py-3 px-1">
                                Big Burger (2)
                            </td>
                            <td className="py-3 px-1">
                                (on the way) about 10 mins
                            </td>
                        </tr>
                        <tr className="">
                            <td className="hid py-3 px-1">3371</td>
                            <td className="py-3 px-1">8.10.2023</td>
                            <td>$80.90</td>
                            <td className="hid py-3 px-1">
                                Big Burger (3) + Pizza Large (1)
                            </td>
                            <td className="py-3 px-1 text-success">
                                Delevered
                            </td>
                        </tr>
                        <tr className="bg-gray">
                            <td className="hid py-3 px-1">8233</td>
                            <td className="py-3 px-1">10.10.2023</td>
                            <td>$100.90</td>
                            <td className="hid py-3 px-1">
                                Pizza medium (3)
                            </td>
                            <td className="py-3 px-1 text-success">
                                Delevered
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrdersPage;
