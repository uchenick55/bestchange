import {createSelector} from "reselect";
import {GlobalStateType} from "../../redux/store-redux";
import {RangeType} from "../Types/commonTypes";



export const CalculatorSelectorsSimple = { // простые селекторы из стейта
    getRange1: (state:GlobalStateType) => {
        const RangeLocal:RangeType | null = []
        state.bestChange.bestChangeData && state.bestChange.bestChangeData.forEach((b)=>{
            if( b.TO === state.bestChange.MyPairData.TO) {
                RangeLocal.push(b.FROM) // выбрать только пары к валюте FROM
            }
        })
        return RangeLocal
    },
    getRange2: (state:GlobalStateType) => {
        const RangeLocal:RangeType | null = []
        state.bestChange.bestChangeData && state.bestChange.bestChangeData.forEach((b)=>{
            if( b.FROM === state.bestChange.MyPairData.FROM) {
                RangeLocal.push(b.TO) // выбрать только пары к валюте TO
            }
        })
        return RangeLocal
    },
    MyPairData: (state:GlobalStateType) => {
        return state.bestChange.MyPairData
    }
}

export const getRange1Reselect = createSelector(CalculatorSelectorsSimple.getRange1, (Range1) => {
    return Range1 // мемоизация данных фильтрации для первого диапазона валют
})
export const getRange2Reselect = createSelector(CalculatorSelectorsSimple.getRange2, (Range2) => {
    return Range2 // мемоизация данных фильтрации для второго диапазона валют
})
