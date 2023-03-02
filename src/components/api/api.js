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
        return (response.data) //возврат данных из поля data
    },
}





