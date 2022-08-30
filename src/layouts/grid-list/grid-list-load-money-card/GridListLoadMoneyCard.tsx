import React from 'react'
import CreditPackageModel from '../../../models/creditPackageModel';
import LoadMoneyCard from '../../card/load-money-card/LoadMoneyCard';
import './GridListLoadMoneyCard.css';

interface Props{
    creditPackages:CreditPackageModel[];
    currency:string;
    exchangeRateCurrency:number;
}
const GridListLoadMoneyCard = ({creditPackages,currency, exchangeRateCurrency}:Props) => {
  return (
    <div className="grid-list-load-money-card-grid-container">
    {creditPackages.map((creditPackage,index) => (
      <div key={creditPackage.id} className="grid-list-load-money-card-grid-item"> <LoadMoneyCard currency={currency} exchangeRateCurrency={exchangeRateCurrency} creditPackage={creditPackage} /></div>
    ))}
  </div>
  )
}

export default GridListLoadMoneyCard