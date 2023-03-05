import React from "react";
import {PairType} from "../Types/commonTypes";

type CalculatorType = {
    selectValue1: string
    selectValue2: string
    Qty1: number
    Qty2: number
    Errors: {
        ErrorInput1: string
        ErrorInput2: string
    } //все ошибки формы
    setQty1AC: (Qty1: number) => void
    setQty2AC: (Qty2: number) => void
    setSelectValue1: (selectValue1: string) => void,
    setSelectValue2: (selectValue2: string) => void,
    MyPairData: PairType
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2


}
let Calculator: React.FC<CalculatorType> = ({
                                                selectValue1, selectValue2, Qty1, Qty2,
                                                setQty1AC, setQty2AC, setSelectValue1,
                                                setSelectValue2, MyPairData, Range1, Range2,
                                                Errors
                                            }) => {
    const inputsRender = <div>
        <select value={selectValue1} onChange={(e) => {
            setSelectValue1(e.currentTarget.value)
        }}>
            {Range1.map(r=>{
                return <option key={r}>{r}</option> // вывод первого селекта из Range1
            })}
        </select>
        <input type="text" value={Qty1} onChange={(e) => {
            setQty1AC(Number(e.currentTarget.value))
        }}/>
        {Errors.ErrorInput1}
        <br/>
        <select value={selectValue2} onChange={(e) => {
            setSelectValue2(e.currentTarget.value)
        }}>
            {Range2.map(r=>{
                return <option key={r}>{r}</option> // вывод второго селекта из Range2
            })}
        </select>
        <input type="text" value={Qty2} onChange={(e) => {
            setQty2AC(Number(e.currentTarget.value))
        }}/>
        {Errors.ErrorInput2}

    </div>

    return <div>
        {inputsRender}
    </div>
}

export default Calculator