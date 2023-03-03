import {PairType, responseType} from "../Types/commonTypes";

type myResultType = {
    rates: { // верхний объект rates
        item: Array<PairType> // свойсво item является массивом объектов
    }
}

export const EditDataFromServer = (response: responseType) => {
    const convert = require("xml-js"); // преобразуем в json
    const data: myResultType = JSON.parse(
        convert.xml2json(response.data, {compact: true, spaces: 2})
    );
// в полученом JSON есть лишние вложеные подобъеты, значения полей неудобно доставать - убираем их
    let response2: Array<PairType> = [] // массив в который будем собирать данные
    data.rates.item.forEach((r: object) => { // пробегаем по всем парам
        const myObject: any = {}; // объект, в который собираем все элементы пары без лишних подобъектов
        Object.keys(r).forEach((o, index2) => { // пробегаем по элементам пары
            const myKey = o.toUpperCase() // ключ в верхнем регистре
            const myValue = Object.values(r)[index2]._text // значение вытягиваем из подобъекта
            if (!isNaN(myValue)) { // если значение не является строкой
                myObject[myKey] = Number(myValue) // добавляем в промежуточный подобъект поле с числом
                return // пропускаем дальнейшее выполенеие для данного прохода
            }
            if (myKey && myValue) { // если и ключ и значение существуют
                myObject[myKey] = myValue // добавляем в промежуточный подобъект поле со строкой
            }
        })
        if (myObject) { // если объект существует
            response2.push(myObject) // пушим его в результирующий массив
        }
    })
    return response2 // ретурним маассив в удобной нам форме без подобъектов в каждом поле
}
