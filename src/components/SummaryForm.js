import React, { useState } from 'react'

const SummaryForm = ({ nbItems, itemsPrice }) => {

    const [shippingPrice, setShippingPrice] = useState(5)
    const [disccount, setDisccount] = useState(0)


    return (

        <article className="checkout p-5">
            <h4 className="p-2 text-secondary">Summary</h4>
            <hr color="#868A93" />
            <p className="d-flex justify-content-between fw-bold fs-5 text-secondary p-2">
                <span>
                    ITEMS {nbItems}
                </span>

                <span>${itemsPrice}</span>

            </p>


            {/* partie shipping  */}
            <h5 className="text-secondary text-uppercase p-2">shipping</h5>

            <select className="form-select mb-3"
                onChange={(e) => setShippingPrice(e.target.value)}
            >
                <option value={5} selected>Standart Delivery 5$</option>
                <option value={10}>Casa 10$</option>
                <option value={15}>Rabat 15$</option>

            </select>

            {/* partie coupon  */}
            <h5 className="text-secondary text-uppercase p-2">Coupon code</h5>


            <input
                type="text"
                placeholder="ex: 42435FD "
                className="form-control"
                onChange={(e) => e.target.value === "YassinCode123" ? setDisccount(0.20) : setDisccount(0)}
            />

            <hr color="#868A93" />

            {/* prix total */}
            <p className="d-flex justify-content-between fw-bold fs-5 text-secondary p-2">
                <span className="text-uppercase fs-5">
                    total price
                </span>
                <span>${parseInt(itemsPrice) + parseInt(shippingPrice) - parseFloat(disccount) * parseInt(itemsPrice)}</span>
            </p>

            
            {/* register button */}
            <div className="d-grid gap-2">
                <button className="btn btn-primary text-uppercase btn-black" type="button">
                    register
                </button>
            </div>
        </article>
    )
}

export default SummaryForm