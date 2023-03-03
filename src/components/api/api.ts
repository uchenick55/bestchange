import axios from 'axios';
import {myObjectType} from "../Types/commonTypes";
import {EditDataFromServer} from "./editDataFromServer";

const instance = axios.create({
    baseURL: 'https://matbea.com/xml/bestchange.xml',
    withCredentials: true,
    headers: {}
});

export let api = { // общий объект с методами api
    getBestChangeData: async () => {// получить данные bestChange с сервера
        const response = await instance.get<string>(``) // получили данные в виде XML
        const response2 = EditDataFromServer(response) // преобразуем в json и убираем лишние подобъекты
        return (response2) // возвращаем данные
    },
}





