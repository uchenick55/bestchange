import {getBestChangeDataTC, getBestChangeDataTC1} from "./bestchange-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "./store-redux";

const SET_INITIALISED_APP = "myApp/app-reducer/SET_INITIALISED_APP"; //константа инициализации приложения

type setInitialisedAppType = { type: typeof SET_INITIALISED_APP }
export const setInitialisedApp = (): setInitialisedAppType => { // экшн креатор  инициализации приложения
    return {type: SET_INITIALISED_APP}
};

type ActionTypes = setInitialisedAppType

type initialStateType = {
    initialisedApp: boolean
}
const initialState: initialStateType = { //стейт по умолчанию для инициализации приложения
    initialisedApp: false, // флаг приложение инициализировано?
}

const appReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {//редьюсер инициализации приложения
    let stateCopy: initialStateType; // объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_INITIALISED_APP: // экшн инициализации приложения
            stateCopy = {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export const initialisedAppThunkCreator //санкреатор инициализации приложения
    = (): ThunkAction<
    void, // санка ничего не возвращает, void
    GlobalStateType, // тип глобального стейта из redux-store
    unknown, // доп аргументы
    ActionTypes // возможные типы экшенов этого редьюсера
    > => {
    return (dispatch) => { // санки  инициализации приложения
        const promise1 = dispatch(getBestChangeDataTC1()) // получение данных с сервера
        Promise.all([promise1]) // если все промисы зарезолвились
            .then(() => {
                dispatch(setInitialisedApp()) // смена флага инициализации на true
            })
    };
}

export default appReducer;










