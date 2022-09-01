import React, { useState } from "react";
import { containTexts } from "../../contains/containTexts";
import "./Payment.css";

const Payment = () => {
  const [credit, setCredit] = useState<number>(10)
  const [creditValue, setCreditValue] = useState<number>(0.10)
  const [paymentThreshold, setPaymentThreshold] = useState<number>(250)
  return (
    <div className="payment-container">
      <div className="payment-your-earning-container">
        <div className="payment-your-earning-text">{containTexts.EARNING}</div>
        <div className="payment-amount-of-money">{credit} {containTexts.CREDIT} = {credit * creditValue}$</div>
        <div className="payment-threshold">{containTexts.PAYMENT_THRESHOLD} {paymentThreshold}$</div>
      </div>
      <div className="payment-button-container">
        <button className="payment-payment-button">{containTexts.PREVIOUS_PAYMENTS}</button>
        <button className="payment-payment-button">{containTexts.PAYMENT_SETTINGS}</button>
      </div>
    </div>
  );
};

export default Payment;
