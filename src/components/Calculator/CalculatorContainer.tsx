import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import commonClasses from "../common/CommonClasses/common.module.css";
import {connect} from "react-redux";
import CalculatorFormik from "./CalculatorFormik/CalculatorFormik";
import {PairType} from "../Types/commonTypes";
import {
    selectValue1AC,
    selectValue2AC,
    setMyPairDataAC,
    setQty1AC,
    setQty2AC,
    setRangesAC
} from "../../redux/bestchange-reducer";
import Calculator from "./Calculator";
import {CalculatorSelectorsSimple, getRange1Reselect, getRange2Reselect} from "./calculator-selectors";

export type CalculatorType = {
    MyPairData: PairType // только на чтение изнутри калькулятора
    selectValue1: string, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
    selectValue2: string,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
    Qty1: number, // значение поля валюты 1 - при его вводе вычисляется Qty2
    Qty2: number,// значение поля валюты 2 - при его вводе вычисляется Qty1
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2
    selectValue1AC: (selectValue1: string) => void,// задание значения из первого списка валют
    selectValue2AC: (selectValue2: string) => void,// задание значения из второго списка валют
    setQty1AC: (Qty1: number) => void,// задание значения из первого поля ввода
    setQty2AC: (Qty2: number) => void, // задание значения из второго поля ввода
    setMyPairDataAC:(selectValue1: string, selectValue2:string) => void, // задание данных для новой пары
    setRangesAC: (Range1: Array<string>, Range2: Array<string>) => void,

}
const CalculatorContainer: React.FC<CalculatorType> = ({   MyPairData, selectValue1,
                                                  selectValue2, Qty1, Qty2,
                                                  selectValue1AC, selectValue2AC, setQty1AC, setQty2AC,
                                                  Range1, Range2,setMyPairDataAC, setRangesAC
                                                }) => {

    useEffect(()=>{
        setRangesAC(Range1, Range2) // записываем диапазоны валют в стейт при изменении пары валют
      console.log("useEffect")
        // записать в стейт Range1 и Range2
    },[selectValue1, selectValue2])

    const setSelectValue1=(selectValue1: string)=>{
        selectValue1AC(selectValue1) // задаем в стейте измененное значение первой пары
        const TOLocal:string = MyPairData.TO// берем из стейта вторую пару
        setMyPairDataAC(selectValue1, TOLocal)
    }
    const setSelectValue2=(selectValue2: string)=>{
        selectValue2AC(selectValue2) // задаем в стейте измененное значение второй пары
        const FROMLocal:string = MyPairData.FROM// берем из стейта первую пару
        setMyPairDataAC(FROMLocal,selectValue2) // устанавливаем все значения новой пары
    }

    const home = <div>
        <Container>
            <h2 className={commonClasses.pageHeader}>Калькулятор</h2>
          {/*  <CalculatorFormik MyPairData={MyPairData}/>*/}
            <Calculator
                selectValue1={selectValue1} selectValue2={selectValue2} Qty1={Qty1} Qty2={Qty2}
                setQty1AC={setQty1AC} setQty2AC={setQty2AC} setSelectValue1={setSelectValue1}
                setSelectValue2={setSelectValue2} MyPairData={MyPairData} Range1={Range1} Range2={Range2}
            />
        </Container>
    </div>

    return (<div>
        {home}
    </div>)
}
const mapStateToProps = (state:any) => {
    return {
        MyPairData: CalculatorSelectorsSimple.MyPairData(state),// данные выбраной пары
        selectValue1: state.bestChange.selectValue1, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
        selectValue2: state.bestChange.selectValue2,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
        Qty1: state.bestChange.Qty1, // значение поля валюты 1 - при его вводе вычисляется Qty2
        Qty2: state.bestChange.Qty2, // значение поля валюты 2 - при его вводе вычисляется Qty1
        Range1: getRange1Reselect(state), // диапазон валют для первого селекта
        Range2: getRange2Reselect(state), // диапазон валют для второго селекта
    }
}

export default connect(mapStateToProps, {
    selectValue1AC, selectValue2AC, setQty1AC, setQty2AC, setMyPairDataAC, setRangesAC
})(CalculatorContainer)

