import {api} from "../components/api/api";
import {PairType} from "../components/Types/commonTypes";
import {apiCommon} from "../components/api/apiLocalStorage";
import {CalculatorSelectorsSimple} from "../components/Calculator/calculator-selectors";

const SET_BEST_CHANGE_DATA = "myApp/bestChangeReducer/SET_BEST_CHANGE_DATA"; //константа задания данных с сервера
const SET_SELECTVALUE1 = "myApp/bestChangeReducer/SET_SELECTVALUE1"; //константа задания данных с первого селекта
const SET_SELECTVALUE2 = "myApp/bestChangeReducer/SET_SELECTVALUE2"; //константа задания данных со второго селекта
const SET_QTY1 = "myApp/bestChangeReducer/SET_QTY1"; //константа задания количества первой валюты
const SET_QTY2 = "myApp/bestChangeReducer/SET_QTY2"; //константа задания количества второй валюты
const SET_MY_PAIR_DATA = "myApp/bestChangeReducer/SET_MY_PAIR_DATA"; //константа задания новой пары вавлют с данными
const SET_RANGES = "myApp/bestChangeReducer/SET_RANGES"; //константа задания Range1 и Range2 после селектора

type setBestChangeDataActionType = { type: typeof SET_BEST_CHANGE_DATA, bestChangeData: any }
export let setBestChangeData = (bestChangeData: any): setBestChangeDataActionType => { // экшн задания данных с сервера
    return {type: SET_BEST_CHANGE_DATA, bestChangeData}
};
type selectValue1ActionType = { type: typeof SET_SELECTVALUE1, selectValue1: string }
export let selectValue1AC = (selectValue1: string): selectValue1ActionType => { // экшн получение данных с первого селекта
    return {type: SET_SELECTVALUE1, selectValue1}
};
type selectValue2ActionType = { type: typeof SET_SELECTVALUE2, selectValue2: string }
export let selectValue2AC = (selectValue2: string): selectValue2ActionType => { // экшн получение данных со второго селекта
    return {type: SET_SELECTVALUE2, selectValue2}
};
type Qty1ActionType = { type: typeof SET_QTY1, Qty1: number }
export let setQty1AC = (Qty1: number): Qty1ActionType => { // экшн получение данных с поля валюты 1
    return {type: SET_QTY1, Qty1}
};
type Qty2ActionType = { type: typeof SET_QTY2, Qty2: number }
export let setQty2AC = (Qty2: number): Qty2ActionType => { // экшн получение данных с поля валюты 2
    return {type: SET_QTY2, Qty2}
};
type setMyPairDataActionType = { type: typeof SET_MY_PAIR_DATA, selectValue1: string, selectValue2: string }
export let setMyPairDataAC = (selectValue1: string, selectValue2: string): setMyPairDataActionType => { // экшн задания данных с сервера
    return {type: SET_MY_PAIR_DATA, selectValue1, selectValue2}
};
type setRangesActionType = { type: typeof SET_RANGES, Range1: Array<string>, Range2: Array<string> }
export let setRangesAC = (Range1: Array<string>, Range2: Array<string>): setRangesActionType => { // экшн задания диапазонов выпадающих селектов
    return {type: SET_RANGES, Range1, Range2}
};

type bestChangeDataType = {}
type initialStateType = {
    bestChangeData: Array<PairType> | null
    MyPairData: PairType // только на чтение изнутри калькулятора
    selectValue1: string, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
    selectValue2: string,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
    Qty1: number, // значение поля валюты 1 - при его вводе вычисляется Qty2
    Qty2: number,// значение поля валюты 2 - при его вводе вычисляется Qty1
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2

}
let initialState: initialStateType = { //стейт по умолчанию
    bestChangeData: null, // все загруженяе данные с сервера
    MyPairData: { // меняется целиком для каждой новой пары
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
    },
    selectValue1: "", // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
    selectValue2: "",// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
    Qty1: 0, // значение поля валюты 1 - при его вводе вычисляется Qty2
    Qty2: 0,// значение поля валюты 2 - при его вводе вычисляется Qty1
    Range1: [],// диапазон валют для селекта 1
    Range2: [],// диапазон валют для селекта 2
}

let bestChangeReducer = (state: initialStateType = initialState, action: any): initialStateType => {//редьюсер
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_BEST_CHANGE_DATA: // кейс задания данных в стейт с сервера
            stateCopy = {
                ...state, // копия всего стейта
                bestChangeData: action.bestChangeData, // задание всех данных с сервера в стейт
                MyPairData: action.bestChangeData[0], // задание первлй прары из списка в начальные значения
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SELECTVALUE1: // кейс задания данных в стейт с первого селекта
            stateCopy = {
                ...state, // копия всего стейта
                selectValue1: action.selectValue1, // задание валюты с  первого селекта
                Qty1: 0,
                Qty2: 0
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_SELECTVALUE2: // кейс задания данных в стейт со второго селекта
            stateCopy = {
                ...state, // копия всего стейта
                selectValue2: action.selectValue2, // задание валюты с  первого селекта
                Qty1: 0,
                Qty2: 0
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_QTY1: // кейс задания количества валюты с первого поля
            stateCopy = {
                ...state, // копия всего стейта
                Qty1: action.Qty1, // задание количества валюты с первого поля
                //Здесь же пересчитываем значение второго поля
                Qty2: (action.Qty1 - state.MyPairData.FROMFEE) * (state.MyPairData.OUT / state.MyPairData.IN) - state.MyPairData.TOFEE
                // расчет при задании количества входной валюты
                // значение валюты 1 минус входная комиссия, умножаем на курс и вычитаем выходную комиссию
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_QTY2: // кейс задания количества валюты с первого поля
            stateCopy = {
                ...state, // копия всего стейта
                Qty2: action.Qty2, // задание количества валюты со второго поля
                Qty1: (action.Qty2 + state.MyPairData.TOFEE)*(state.MyPairData.IN/state.MyPairData.OUT) + state.MyPairData.FROMFEE
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_MY_PAIR_DATA: // кейс задания новой пары с данными

            stateCopy = {
                ...state, // копия всего стейта
            }
            stateCopy.bestChangeData?.forEach(b => {
                if (b.FROM === action.selectValue1 && b.TO === action.selectValue2) {
                    stateCopy.MyPairData = b
                }
            })
            return stateCopy; // возврат копии стейта после изменения
        case SET_RANGES: // кейс задания диапазонов селектов Range1 и Range2
            stateCopy = {
                ...state, // копия всего стейта
                Range1: action.Range1, // задание первого диапазона валют
                Range2: action.Range2, // задание второго диапазона валют
            }
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

export let getBestChangeDataTC1 = () => {//санкреатор получения данных из внешнего источника
    return async (dispatch: any) => { // санка получения данных из внешнего источника
        const response2 = await apiCommon.getData()
        dispatch(response2)  //записать считаное из localStorage значение темы в store
    }
}


export default bestChangeReducer;










