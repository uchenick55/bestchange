import {myObjectType} from "../Types/commonTypes";

type myResultType = {
    rates: { // верхний объект rates
        item: Array<object> // свойсво item является массивом объектов
    }
}

export const EditDataFromServer = (response:any ) => {
    const convert = require("xml-js"); // преобразуем в json
    const data:myResultType = JSON.parse(
        convert.xml2json(response.data, {compact: true, spaces: 2})
    );
// в полученом JSON есть лишние вложеные подобъеты, значения полей неудобно доставать - убираем их
    let response2: Array<object> = [] // массив в который будем собирать данные
    data.rates.item.forEach((r:object) => { // пробегаем по всем парам
        const myObject: myObjectType | {} = {}; // объект, в который собираем все элементы пары без лишних подобъектов
        Object.keys(r).forEach((o, index2)=>{ // пробегаем по элементам пары
            const myKey = o // ключ без изменений
            const myValue = Object.values(r)[index2]._text // значение вытягиваем из подобъекта
            if (myKey && myValue) { // если и ключ и значение существуют
                // @ts-ignore
                myObject[myKey]=myValue // добавляем в промежуточный подобъект
            }
        })
        if (myObject) { // если объект существует
            response2.push(myObject) // пушим его в результирующий массив
        }
    })
    return response2 // ретурним маассив в удобной нам форме без подобъектов в каждом поле
}
