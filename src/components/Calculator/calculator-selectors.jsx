
export const CalculatorSelectorsSimple = { // простые селекторы из стейта
    getRange1: (state) => {
        const RangeLocal = []
        const aaa = state.bestChange.bestChangeData.forEach((b)=>{
            if( b.TO === state.bestChange.MyPairData.TO) {
                RangeLocal.push(b.FROM) // выбрать только пары к валюте FROM
            }
        })
        console.log("getRange1:", RangeLocal)
        return RangeLocal
    },
    getRange2: (state) => {
        const RangeLocal = []
        const aaa = state.bestChange.bestChangeData.forEach((b)=>{
            if( b.FROM === state.bestChange.MyPairData.FROM) {
                RangeLocal.push(b.TO) // выбрать только пары к валюте FROM
            }
        })
        console.log("getRange2:", RangeLocal)
        return RangeLocal
    }
}

/*
    bestChangeData: null, // все загруженяе данные с сервера
    MyPairData: { // только на чтение изнутри калькулятора
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
    Range1:[]

asdfsfd*/
