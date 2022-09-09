import React, { useState } from "react";
import { constantsText } from "../../constants/constantsText";
import "./Payment.css";

const Payment = () => {
  const [credit, setCredit] = useState<number>(10)
  const [creditValue, setCreditValue] = useState<number>(0.10)
  const [paymentThreshold, setPaymentThreshold] = useState<number>(250)
  return (
    <div className="payment-container">
      <div className="payment-your-earning-container">
        <div className="payment-your-earning-text">{constantsText.EARNING}</div>
        <div className="payment-amount-of-money">{credit} {constantsText.CREDIT} = {credit * creditValue}$</div>
        <div className="payment-threshold">{constantsText.PAYMENT_THRESHOLD} {paymentThreshold}$</div>
      </div>
      <div className="payment-button-container">
        <button className="payment-payment-button">{constantsText.PREVIOUS_PAYMENTS}</button>
        <button className="payment-payment-button">{constantsText.PAYMENT_SETTINGS}</button>
      </div>
    </div>
  );
};

export default Payment;
