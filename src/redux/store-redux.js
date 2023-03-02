import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'; // thunkMiddleWare позволяет диспатчить санки помимо экшенов дл обновления стейта
import appReducer from "./app-reducer";
import bestChangeReducer from "./bestchange-reducer";


let reducers = combineReducers({ // объединяем стейт редьюсеров в один объект store
    app: appReducer, // стейт инициализации приложения
    bestChange: bestChangeReducer, // стейт данных с сервера
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleWare));//ApplyMiddleWare позволяет сделать прослойку между UI и редьюсером, чтобы можно было диспатчить не только экшены, но и санки.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleWare)
));

window.store = store; // возможность смотреть стор через консоль

export default store
