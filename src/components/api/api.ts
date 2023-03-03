import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://matbea.com/xml/bestchange.xml',
    withCredentials: true,
    headers: {}
});

type myResultType = {
    rates: { // верхний объект rates
        item: Array<object> // свойсво item является массивом объектов
    }
}

export let api = { // общий объект с методами api
    getBestChangeData: async () => {// получить данные bestChange с сервера
        const response = await instance.get<string>(``)
        const convert = require("xml-js");
        const data:myResultType = JSON.parse(
            convert.xml2json(response.data, {compact: true, spaces: 2})
        );
        return (data.rates.item) // возвращаем данные
    },
}





