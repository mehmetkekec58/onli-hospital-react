import React from 'react'
import CreditPackageModel from '../../../models/creditPackageModel';
import LoadMoneyCard from '../../card/load-money-card/LoadMoneyCard';
import './GridListLoadMoneyCard.css';

interface Props{
    creditPackages:CreditPackageModel[]
}
const GridListLoadMoneyCard = ({creditPackages}:Props) => {
  return (
    <div className="grid-list-load-money-card-grid-container">
    {creditPackages.map((creditPackage,index) => (
      <div key={creditPackage.id} className="grid-list-load-money-card-grid-item"> <LoadMoneyCard creditPackage={creditPackage} /></div>
    ))}
  </div>
  )
}

export default GridListLoadMoneyCard