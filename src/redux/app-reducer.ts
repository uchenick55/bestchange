import {getBestChangeDataTC} from "./bestchange-reducer";

const SET_INITIALISED_APP = "myApp/app-reducer/SET_INITIALISED_APP"; //константа инициализации приложения

type setInitialisedApp = {type: typeof SET_INITIALISED_APP}
export const setInitialisedApp = ():setInitialisedApp => { // экшн креатор  инициализации приложения
  return {type: SET_INITIALISED_APP}
};

type initialStateType = {
  initialisedApp: boolean
}
const initialState:initialStateType = { //стейт по умолчанию для инициализации приложения
  initialisedApp: false, // флаг приложение инициализировано?
}

const appReducer = (state:initialStateType = initialState, action:any):initialStateType => {//редьюсер инициализации приложения
  let stateCopy:initialStateType; // объявлениечасти части стейта до изменения редьюсером
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

export const initialisedAppThunkCreator = () => {// санкреатор инициализации приложения
  return (dispatch: any) => { // санки  инициализации приложения
    const promise1 = dispatch(getBestChangeDataTC()) // проверка статуса авторизации
    const promise2 = 2//dispatch(getThemeThunkCreator()) // получение темы
    Promise.all([promise1, promise2]) // если все промисы зарезолвились
        .then(() => {
          setTimeout(()=>{
            dispatch(setInitialisedApp()) // смена флага инициализации на true
          }, 500)
        })
  };
}

export default appReducer;










