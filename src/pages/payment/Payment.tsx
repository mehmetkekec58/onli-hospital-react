import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-your-earning-container">
        <div className="payment-your-earning-text">Kazancınız</div>
        <div className="payment-amount-of-money">52.5$</div>
      </div>
      <div className="payment-button-container">
        <button className="payment-payment-settings">Ödeme Ayarları</button>
      </div>
    </div>
  );
};

export default Payment;
