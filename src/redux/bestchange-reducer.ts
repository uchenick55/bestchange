import {api} from "../components/api/api";
import {PairType} from "../components/Types/commonTypes";

const SET_BEST_CHANGE_DATA = "myApp/bestChangeReducer/SET_BEST_CHANGE_DATA"; //константа задания данных с сервера

type setBestChangeDataActionType = { type: typeof SET_BEST_CHANGE_DATA, bestChangeData: any }
export let setBestChangeData = (bestChangeData: any): setBestChangeDataActionType => { // экшн задания темы
    return {type: SET_BEST_CHANGE_DATA, bestChangeData}
};

type bestChangeDataType = {}
type initialStateType = {
    bestChangeData: any
    MyPairData: PairType

}
let initialState: initialStateType = { //стейт по умолчанию темы
    bestChangeData: null, // тема в bll по умолчанию
    MyPairData: {
        FROM: "", // какую валюту нужно отдать для обмена
        TO: "",  // какую валюту получаем при обмене
        MAXAMOUNT: 0, // максимальное количество валюты отдаем (за раз)
        MINAMOUNT: 0, // минимальное количество валюты отдаем (за раз)
        IN: 0, // сколько отдаем валюты для обмена (для расчета курса)
        OUT: 0, // сколько получаем валюты (для расчета курса)
        FROMFEE: 0, // комиссия от входящего депозита
        TOFEE: 0, // комиссия от полученой валюты, вычитается после обмена
        AMOUNT: 0, // максимальное количество валюты при получении
        PARAM: "", // всегда manual

    }
}

let bestChangeReducer = (state: initialStateType = initialState, action: any): initialStateType => {//редьюсер задания темы
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_BEST_CHANGE_DATA: // кейс задания данных в стейт с сервера
            stateCopy = {
                ...state, // копия всего стейта
                bestChangeData: action.bestChangeData, // задание темы в BLL
                MyPairData: action.bestChangeData[0] // задание первлй прары из списка в начальные значения
            }
            console.log(stateCopy.bestChangeData)
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export let getBestChangeDataTC = () => {//санкреатор получения данных из внешнего источника
    return async (dispatch: any) => { // санка получения данных из внешнего источника
        const response2 = await api.getBestChangeData()  //получить данные из внешнего источника
        if (response2) {// если они не пустые
            dispatch(setBestChangeData(response2))  //записать считаное из localStorage значение темы в store
        }
    }
}

export default bestChangeReducer;










