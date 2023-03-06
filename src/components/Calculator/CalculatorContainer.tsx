import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import commonClasses from "../common/CommonClasses/common.module.css";
import {connect} from "react-redux";
import {ErrorsType, PairType} from "../Types/commonTypes";
import {
    selectValue1AC,
    selectValue2AC, setErrorsAC,
    setMyPairDataAC,
    setQty1AC,
    setQty2AC,
    setRangesAC
} from "../../redux/bestchange-reducer";
import Calculator from "./Calculator";
import {CalculatorSelectorsSimple, getRange1Reselect, getRange2Reselect} from "./calculator-selectors";
import {GlobalStateType} from "../../redux/store-redux";

export type CalculatorType = {
    MyPairData: PairType // только на чтение изнутри калькулятора
    selectValue1: string, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
    selectValue2: string,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
    Qty1: number, // значение поля валюты 1 - при его вводе вычисляется Qty2
    Qty2: number,// значение поля валюты 2 - при его вводе вычисляется Qty1
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2
    Errors: ErrorsType //все ошибки формы
    selectValue1AC: (selectValue1: string) => void,// задание значения из первого списка валют
    selectValue2AC: (selectValue2: string) => void,// задание значения из второго списка валют
    setQty1AC: (Qty1: number) => void,// задание значения из первого поля ввода
    setQty2AC: (Qty2: number) => void, // задание значения из второго поля ввода
    setMyPairDataAC:(selectValue1: string, selectValue2:string) => void, // задание данных для новой пары
    setRangesAC: (Range1: Array<string>, Range2: Array<string>) => void, // задание диапазонов валют для выбора
    setErrorsAC: (Errors: ErrorsType)=> void // задание ошибок формы
   // reverseCurrency: () => void  // инвертируем пару по нажатию кнопки

}
const CalculatorContainer: React.FC<CalculatorType> = ({   MyPairData, selectValue1,
                                                  selectValue2, Qty1, Qty2,
                                                  selectValue1AC, selectValue2AC, setQty1AC, setQty2AC,
                                                  Range1, Range2,setMyPairDataAC, setRangesAC,
                                                  Errors, setErrorsAC
                                                }) => {


    useEffect(()=>{//при изменении пары валют записываем диапазоны валют в стейт
        setRangesAC(Range1, Range2) //
        // записать в стейт Range1 и Range2
        setQty1AC(MyPairData.MINAMOUNT)
        //задать в MINAMOUNT значение поля Qty1
    },[selectValue1, selectValue2])

    useEffect(()=>{// валидация формы
        let ErrorLocal = Object.assign({}, Errors); // поверхностно копируем весь объект ошибок
        if (Qty1>=MyPairData.MAXAMOUNT) {
            ErrorLocal.ErrorInput1 = `максимум ${MyPairData.MAXAMOUNT}`
        }
        if (Qty1<=MyPairData.MINAMOUNT) {
            ErrorLocal.ErrorInput1 = `минимум  ${MyPairData.MINAMOUNT}`
        }
        if (Qty1>=MyPairData.MINAMOUNT && Qty1<=MyPairData.MAXAMOUNT) {
            ErrorLocal.ErrorInput1 = ""
        }
        if (Qty2>MyPairData.AMOUNT) {
            ErrorLocal.ErrorInput2 = `максимум ${MyPairData.AMOUNT}`
        }
        if (Qty2<0) {
            ErrorLocal.ErrorInput2 = `не меньше 0`
        }
        if (Qty2>0 && Qty2<=MyPairData.AMOUNT) {
            ErrorLocal.ErrorInput2 = ``
        }

        setErrorsAC(ErrorLocal) // запись в стейт обновленного объекта с ошибками

    },[Qty1,Qty2, MyPairData.MAXAMOUNT, MyPairData.MINAMOUNT])

    const setSelectValue1=(selectValue1: string)=>{ // действия при выборе валюты в первом селекте
        selectValue1AC(selectValue1) // задаем в стейте измененное значение первой пары
        const TOLocal:string = MyPairData.TO// берем из стейта вторую пару
        setMyPairDataAC(selectValue1, TOLocal)
    }
    const setSelectValue2=(selectValue2: string)=>{// действия при выборе валюты во втором селекте
        selectValue2AC(selectValue2) // задаем в стейте измененное значение второй пары
        const FROMLocal:string = MyPairData.FROM// берем из стейта первую пару
        setMyPairDataAC(FROMLocal,selectValue2) // устанавливаем все значения новой пары
    }
    useEffect(()=>{// при каждом изменении полей FROM и TO в MyPairData
        selectValue1AC(MyPairData.FROM) // задаем в стейте измененное значение первой валюты
        selectValue2AC(MyPairData.TO) // задаем в стейте измененное значение второй валюты
    },[MyPairData.FROM,MyPairData.TO])
    const [Qty1String, setQty1String] = useState(Qty1.toString())
    const [Qty2String, setQty2String] = useState(Qty2.toString())

    useEffect(()=>{
        setQty1String(Qty1.toString()) // при каждом обновлении Qty1 в сторе - обновить значение строки поля вывода 1
        setQty2String(Qty2.toString()) // при каждом обновлении Qty2 в сторе - обновить значение строки поля вывода 2
    },[setQty1String, Qty1, setQty2String, Qty2])


    const reverseCurrency = () => { // инвертируем пару по нажатию кнопки
        setMyPairDataAC(selectValue2,selectValue1)
    }

    const home = <div>
        <Container>
            <h2 className={commonClasses.pageHeader}>Калькулятор</h2>
          <div><button onClick={()=>{reverseCurrency()}}>Поменять валюты местами</button></div>
            <Calculator
                selectValue1={selectValue1} selectValue2={selectValue2} Qty1={Qty1} Qty2={Qty2}
                setQty1AC={setQty1AC} setQty2AC={setQty2AC} setSelectValue1={setSelectValue1}
                setSelectValue2={setSelectValue2} MyPairData={MyPairData} Range1={Range1} Range2={Range2}
                Errors={Errors} Qty1String={Qty1String} setQty1String={setQty1String}
                Qty2String={Qty2String} setQty2String={setQty2String}
            />
        </Container>
    </div>

    return (<div>
        {home}
    </div>)
}
const mapStateToProps = (state:GlobalStateType) => {
    return {
        MyPairData: CalculatorSelectorsSimple.MyPairData(state),// данные выбраной пары
        selectValue1: state.bestChange.selectValue1, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
        selectValue2: state.bestChange.selectValue2,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
        Qty1: state.bestChange.Qty1, // значение поля валюты 1 - при его вводе вычисляется Qty2
        Qty2: state.bestChange.Qty2, // значение поля валюты 2 - при его вводе вычисляется Qty1
        Range1: getRange1Reselect(state), // диапазон валют для первого селекта
        Range2: getRange2Reselect(state), // диапазон валют для второго селекта
        Errors:state.bestChange.Errors,// все ошибки формы
    }
}

export default connect(mapStateToProps, {
    selectValue1AC, selectValue2AC, setQty1AC, setQty2AC, setMyPairDataAC, setRangesAC, setErrorsAC
})(CalculatorContainer)

