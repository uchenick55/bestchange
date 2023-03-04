import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import commonClasses from "../common/CommonClasses/common.module.css";
import {connect} from "react-redux";
import CalculatorFormik from "./CalculatorFormik/CalculatorFormik";
import {PairType} from "../Types/commonTypes";
import {selectValue1AC, selectValue2AC, setQty1AC, setQty2AC} from "../../redux/bestchange-reducer";
import Calculator from "./Calculator";
import {CalculatorSelectorsSimple} from "./calculator-selectors";

export type CalculatorType = {
    MyPairData: PairType // только на чтение изнутри калькулятора
    selectValue1: string, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
    selectValue2: string,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
    Qty1: number, // значение поля валюты 1 - при его вводе вычисляется Qty2
    Qty2: number,// значение поля валюты 2 - при его вводе вычисляется Qty1
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2
    selectValue1AC: (selectValue1: string) => void,
    selectValue2AC: (selectValue2: string) => void,
    setQty1AC: (Qty1: number) => void,
    setQty2AC: (Qty2: number) => void,

}
const CalculatorContainer: React.FC<CalculatorType> = ({   MyPairData, selectValue1,
                                                  selectValue2, Qty1, Qty2,
                                                  selectValue1AC, selectValue2AC, setQty1AC, setQty2AC,
                                                  Range1, Range2
                                                }) => {

    const home = <div>
        <Container>
            <h2 className={commonClasses.pageHeader}>Калькулятор</h2>
          {/*  <CalculatorFormik MyPairData={MyPairData}/>*/}
            <Calculator
                selectValue1={selectValue1} selectValue2={selectValue2} Qty1={Qty1} Qty2={Qty2}
                setQty1AC={setQty1AC} setQty2AC={setQty2AC} selectValue1AC={selectValue1AC}
                selectValue2AC={selectValue2AC} MyPairData={MyPairData} Range1={Range1} Range2={Range2}
            />
        </Container>
    </div>

    return (<div>
        {home}
    </div>)
}
const mapStateToProps = (state:any) => {
    return {
        MyPairData: state.bestChange.MyPairData,// данные выбраной пары
        selectValue1: state.bestChange.selectValue1, // значение селекта 1 (валюты 1) (на его основе фильтруется bestChangeData и получаем MyPairData)
        selectValue2: state.bestChange.selectValue2,// значение селекта 2 (валюты 2) (на его основе фильтруется bestChangeData и получаем MyPairData)
        Qty1: state.bestChange.Qty1, // значение поля валюты 1 - при его вводе вычисляется Qty2
        Qty2: state.bestChange.Qty2, // значение поля валюты 2 - при его вводе вычисляется Qty1
        Range1: CalculatorSelectorsSimple.getRange1(state), // диапазон валют для первого селекта
        Range2: CalculatorSelectorsSimple.getRange2(state), // диапазон валют для второго селекта
    }
}

export default connect(mapStateToProps, {
    selectValue1AC, selectValue2AC, setQty1AC, setQty2AC
})(CalculatorContainer)

