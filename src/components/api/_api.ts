import axios from 'axios';
import {responseType} from "../Types/commonTypes";
import {_editDataFromServer} from "./_editDataFromServer";

const instance = axios.create({
    baseURL: 'https://matbea.com/xml/bestchange.xml',
    withCredentials: true,
    headers: {}
});

export const api = { // общий объект с методами api
    getBestChangeData: async () => {// получить данные bestChange с сервера
        const response: responseType  = await instance.get(``) // получили данные в виде XML
        return _editDataFromServer(response) // преобразуем в json и убираем лишние подобъекты, возвращаем данные
    },
}





