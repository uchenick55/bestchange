import {createSelector} from "reselect";

export const CalculatorSelectorsSimple = { // простые селекторы из стейта
    getRange1: (state) => {
        const RangeLocal = []
        state.bestChange && state.bestChange.bestChangeData.forEach((b)=>{
            if( b.TO === state.bestChange.MyPairData.TO) {
                RangeLocal.push(b.FROM) // выбрать только пары к валюте FROM
            }
        })
        return RangeLocal
    },
    getRange2: (state) => {
        const RangeLocal = []
        state.bestChange && state.bestChange.bestChangeData.forEach((b)=>{
            if( b.FROM === state.bestChange.MyPairData.FROM) {
                RangeLocal.push(b.TO) // выбрать только пары к валюте FROM
            }
        })
        return RangeLocal
    },
    MyPairData: (state) => {
        return state.bestChange.MyPairData
    }
}

export let getRange1Reselect = createSelector(CalculatorSelectorsSimple.getRange1, (Range1) => {
    return Range1 // мемоизация данных фильтрации для первого диапазона валют
})
export let getRange2Reselect = createSelector(CalculatorSelectorsSimple.getRange2, (Range2) => {
    return Range2 // мемоизация данных фильтрации для второго диапазона валют
})
