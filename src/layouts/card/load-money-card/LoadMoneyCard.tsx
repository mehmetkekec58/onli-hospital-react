import React from 'react'
import CreditPackageModel from '../../../models/creditPackageModel';
import './LoadMoneyCard.css'

interface Props{
    creditPackage:CreditPackageModel;
}

const LoadMoneyCard = ({creditPackage}:Props) => {
  return (
    <div className='load-money-card'>
    <div className='load-money-card-package-name'>{creditPackage.creditPackageName}</div>
    <div className='load-money-card-title'>Fiyat:{creditPackage.price}</div>
    <div className='load-money-card-title'>Kredi:{creditPackage.creditAmount}</div>
    <div className='load-money-card-operations-icons'>
      <div className='load-money-card-follow-button load-money-card-follow'>Satın Al</div>
    </div>
   

  </div>
  )
}

export default LoadMoneyCard