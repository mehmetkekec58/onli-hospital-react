import React from "react";
import "./Payment.css";

const Payment = () => {

  const creditValue = 0.10
  const kredi = 50
  return (
    <div className="payment-container">
      <div className="payment-your-earning-container">
        <div className="payment-your-earning-text">Kazancınız</div>
        <div className="payment-amount-of-money">{kredi} kredi = {kredi * creditValue}$</div>
        <div className="payment-threshold">Ödeme Eşiği: 250$</div>
      </div>
      <div className="payment-button-container">
      <button className="payment-payment-button">Daha Önce Yapılan Ödemeler</button>
        <button className="payment-payment-button">Ödeme Ayarları</button>
      </div>
    </div>
  );
};

export default Payment;
