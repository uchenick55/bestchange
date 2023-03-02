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
        const parseString = require('xml2js').parseString;
        let result1;
        parseString(response.data, function (err, result) {
            result1=result.rates
        });
        return (result1) //возврат данных из поля data
    },
}





