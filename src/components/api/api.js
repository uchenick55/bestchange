import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://matbea.com/xml/bestchange.xml',
    withCredentials: true,
    headers: {
    }
});

export let api = { // объект с методами api для USERS и follow/unfollow
    getBestChangeData: async () => {// получить данные bestChange с сервера
        const response = await instance.get()
        const convert = require("xml-js");
        const data = JSON.parse(
            convert.xml2json(response.data, { compact: true, spaces: 2 })
        );
        console.log(data.rates)
        return (data.rates) //возврат данных из поля data
    },
}





