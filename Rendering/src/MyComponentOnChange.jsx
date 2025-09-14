// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import { useState } from "react"

function MyComponentUseChange() {
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");
    
    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (<>
        <div>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    </>);
}

export default MyComponentUseChange