import {bestchange} from "./bestchange/bestchange";

export const api = { // общий объект с методами api
    getBestChangeData: () => {// получить данные bestChange
        return bestchange.rates.item // возвращаем данные
    },
}





