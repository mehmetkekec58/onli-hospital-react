import React from 'react'
import GridListLoadMoneyCard from '../../layouts/grid-list/grid-list-load-money-card/GridListLoadMoneyCard'
import CreditPackageModel from '../../models/creditPackageModel'
import './LoadMoney.css'

const creditPackages: CreditPackageModel[] = [
{
    id:0,
    creditPackageName:"En düşük paket",
    price:0.25,
    discount:0,
    creditAmount:1,
},
{
    id:2,
    creditPackageName:"Orta paket paket",
    price:5.0,
    discount:0,
    creditAmount:20,
},
{
    id:1,
    creditPackageName:"Al doya doya harca",
    price:10.0,
    discount:0,
    creditAmount:40,
},

{
    id:3,
    creditPackageName:"Güç paketi paket",
    price:100.0,
    discount:0,
    creditAmount:400,
},
]

const LoadMoney = () => {

    return (
        <div className='load-money-container'>
           <GridListLoadMoneyCard creditPackages={creditPackages}/> 
        </div>
    )
}

export default LoadMoney