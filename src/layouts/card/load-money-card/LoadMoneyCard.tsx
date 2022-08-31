import React, { useEffect, useState } from 'react'
import { containTexts } from '../../../contains/containTexts';
import CreditPackageModel from '../../../models/creditPackageModel';
import ExchangeRate from '../../../services/exchangeRateService';
import './LoadMoneyCard.css'

interface Props {
  creditPackage: CreditPackageModel;
  currency: string;
  exchangeRateCurrency: number;
}

const LoadMoneyCard = ({ creditPackage, currency, exchangeRateCurrency }: Props) => {

  function discountedPrice(price: number, discount: number): number {
    return price - (discount * price / 100)
  }
  function numberCeil(param:number) {
    return Math.ceil(param)
  }

  return (
    <div className='load-money-card'>
      <div className='load-money-card-package-name'>{creditPackage.creditPackageName}</div>
      <div className='load-money-text-container'>
        <hr />
        <div className='load-money-card-title'>{containTexts.CREDIT}: {creditPackage.creditAmount}</div>
        {creditPackage.discount > 0 && <div className='load-money-card-title green'>{containTexts.DISCOUNT}: {creditPackage.discount}%</div>}
        <div className='load-money-card-title'>{containTexts.PRICE}: {creditPackage.discount > 0 && <span style={{ textDecoration: 'line-through', color: 'rgb(241, 57, 57)', fontWeight: 'bold',marginLeft:"5px",marginRight:"5px"}}> {creditPackage.price}$ </span>}  {discountedPrice(creditPackage.price, creditPackage.discount)}$</div>
        <div className='load-money-card-title'>≌  {exchangeRateCurrency === 0 ? containTexts.NOT_CALCULATED_YET : numberCeil(exchangeRateCurrency * discountedPrice(creditPackage.price, creditPackage.discount))+ currency}</div>
        <hr />
      </div>
      <div className='load-money-card-operations-icons'>
        <button className='load-money-card-buy-button load-money-card-buy'>{containTexts.BUY}</button>
      </div>
    </div>
  )
}

export default LoadMoneyCard