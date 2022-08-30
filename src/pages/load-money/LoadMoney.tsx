import React, { useEffect, useState } from 'react'
import GridListLoadMoneyCard from '../../layouts/grid-list/grid-list-load-money-card/GridListLoadMoneyCard'
import CreditPackageModel from '../../models/creditPackageModel'
import ExchangeRate from '../../services/exchangeRateService'
import './LoadMoney.css'

const creditPackages: CreditPackageModel[] = [
{
    id:0,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Bozdur bozdur harca",
    price:0.10,
    discount:0,
    creditAmount:1,
},
{
    id:4,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Al hayrını gör",
    price:1,
    discount:0,
    creditAmount:10,
},
{
    id:2,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Orta paket",
    price:5.0,
    discount:0,
    creditAmount:50,
},
{
    id:1,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Al doya doya harca",
    price:10.0,
    discount:0,
    creditAmount:100,
},

{
    id:3,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Güç paketi paket",
    price:100.0,
    discount:5,
    creditAmount:1000,
},
{
    id:5,
    photoUrl:"https://cdn.pixabay.com/photo/2014/05/19/18/00/background-348350_960_720.jpg",
    creditPackageName:"Ultra güç paketi",
    price:1000.0,
    discount:10,
    creditAmount:10000,
},
]

const LoadMoney = () => {
    
    const currency = "TRY"
    const [exchangeRateCurrency, setExchangeRateCurrency] = useState(0);
    
    useEffect(() => {
        let exchangeRate = new ExchangeRate();
        exchangeRate.calculateExchangeRate(currency).then((result) => setExchangeRateCurrency(result.data.data));
      }, [])
      
    return (
        <div className='load-money-container'>
           <GridListLoadMoneyCard currency={currency} exchangeRateCurrency={exchangeRateCurrency}  creditPackages={creditPackages}/> 
        </div>
    )
}

export default LoadMoney