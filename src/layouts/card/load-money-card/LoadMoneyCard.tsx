import React from 'react'
import CreditPackageModel from '../../../models/creditPackageModel';
import './LoadMoneyCard.css'

interface Props{
    creditPackage:CreditPackageModel;
}

const LoadMoneyCard = ({creditPackage}:Props) => {
  return (
    <div style={{backgroundImage:`url(${creditPackage.photoUrl})`,backgroundSize: 'cover'}} className='load-money-card'>
    <div className='load-money-card-package-name'>{creditPackage.creditPackageName}</div>
    <div className='load-money-card-title'>Fiyat: {creditPackage.price - (creditPackage.discount*creditPackage.price/100)}$</div>
    <div className='load-money-card-title'>Kredi: {creditPackage.creditAmount}</div>
    { creditPackage.discount>0 && <div className='load-money-card-title'>indirim: {creditPackage.discount}%</div>}
    <div className='load-money-card-operations-icons'>
      <div className='load-money-card-buy-button load-money-card-buy'>Satın Al</div>
    </div>
   

  </div>
  )
}

export default LoadMoneyCard