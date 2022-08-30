import axios from "axios"

export default class ExchangeRate {
    calculateExchangeRate(code: string) {
        return axios.get<{ data: number }>(`https://dotnet-app-deneme.herokuapp.com/getValue?code=${code}`, {
            "headers": {
                "content-type": "application/json",
            }
        })


    }

}
