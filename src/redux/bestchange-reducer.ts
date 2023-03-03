import {api} from "../components/api/api";

const SET_BEST_CHANGE_DATA = "myApp/bestChangeReducer/SET_BEST_CHANGE_DATA"; //константа задания данных с сервера

type setBestChangeDataActionType = { type: typeof SET_BEST_CHANGE_DATA, bestChangeData: any }
export let setBestChangeData = (bestChangeData: any): setBestChangeDataActionType => { // экшн задания темы
    return {type: SET_BEST_CHANGE_DATA, bestChangeData}
};

type bestChangeDataType = {}
type initialStateType = {
    bestChangeData: any
}
let initialState: initialStateType = { //стейт по умолчанию темы
    bestChangeData: null, // тема в bll по умолчанию
}

let bestChangeReducer = (state: initialStateType = initialState, action: any): initialStateType => {//редьюсер задания темы
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_BEST_CHANGE_DATA: // кейс задания данных в стейт с сервера
            stateCopy = {
                ...state, // копия всего стейта
                bestChangeData: action.bestChangeData, // задание темы в BLL
            }
            console.log(stateCopy.bestChangeData)
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

const editDataFromServer = (response1:any ) => {

    let response2: Array<object> = [] // массив в который будем собирать данные
    response1.forEach((r:object) => { // пробегаем по всем парам
        let myObject: object = []; // объект, в который собираем все элементы пары без лишних подобъектов
        Object.keys(r).forEach((o, index2)=>{ // пробегаем по элементам пары
            let myKey = o // ключ без изменений
            let myValue = Object.values(r)[index2]._text // значение вытягиваем из подобъекта
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

export let getBestChangeDataTC = () => {//санкреатор получения данных из внешнего источника
    return async (dispatch: any) => { // санка получения данных из внешнего источника
        const response1 = await api.getBestChangeData()  //получить данные из внешнего источника
        if (response1) {
            const response2 = editDataFromServer(response1)
            dispatch(setBestChangeData(response2))  //записать считаное из localStorage значение темы в store
        }

    }
}

export default bestChangeReducer;










