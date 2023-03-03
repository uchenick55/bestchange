import {api} from "../components/api/api";
import {myObjectType} from "../components/Types/commonTypes";

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

export let getBestChangeDataTC = () => {//санкреатор получения данных из внешнего источника
    return async (dispatch: any) => { // санка получения данных из внешнего источника
        const response2 = await api.getBestChangeData()  //получить данные из внешнего источника
        if (response2) {// если они не пустые
            dispatch(setBestChangeData(response2))  //записать считаное из localStorage значение темы в store
        }
    }
}

export default bestChangeReducer;










