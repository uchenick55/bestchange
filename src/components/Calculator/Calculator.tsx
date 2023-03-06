import React, {ChangeEvent, useState} from "react";
import {ErrorsType, PairType} from "../Types/commonTypes";

type CalculatorType = {
    selectValue1: string
    selectValue2: string
    Qty1: number
    Qty2: number
    Errors: ErrorsType //все ошибки формы
    setQty1AC: (Qty1: number) => void
    setQty2AC: (Qty2: number) => void
    setSelectValue1: (selectValue1: string) => void,
    setSelectValue2: (selectValue2: string) => void,
    MyPairData: PairType
    Range1: Array<string> // диапазон значений для селекта 1
    Range2: Array<string> // диапазон значений для селекта 2
    Qty1String: string // строковый ввод количества первой валюты
    setQty1String: (Qty1String:string)=>void // изменение количества первой валюты в виде строки
    Qty2String: string// строковый ввод количества второрой валюты
    setQty2String: (Qty2String:string)=>void // изменение количества первой валюты в виде строки
}
const Calculator: React.FC<CalculatorType> = ({
                                                  selectValue1, selectValue2, Qty1, Qty2,
                                                  setQty1AC, setQty2AC, setSelectValue1,
                                                  setSelectValue2, MyPairData, Range1, Range2,
                                                  Errors,Qty1String, setQty1String,
                                                  Qty2String, setQty2String
                                              }) => {



    const onChangeQty1 = (e:ChangeEvent<HTMLInputElement>) => {
        setQty1AC(Number(e.currentTarget.value))
        setQty1String(e.currentTarget.value)
    }
    const onChangeQty2 = (e:ChangeEvent<HTMLInputElement>) => {
        setQty2AC(Number(e.currentTarget.value))
        setQty2String(e.currentTarget.value)
    }

    const kurs: string = MyPairData.IN > MyPairData.OUT // вывод
        // меняем порядок отображения валют в курсе в зависимости от того, что больше
        ? `Курс обмена ${Math.round(100 * MyPairData.IN / MyPairData.OUT) / 100} ${MyPairData.FROM} =  1  ${MyPairData.TO} `
        : `Курс обмена 1  ${MyPairData.FROM} = ${Math.round(100 * MyPairData.OUT / MyPairData.IN) / 100} ${MyPairData.TO}  `

    const inputsRender = <div> {/*отрисовка формы калькулятора*/}
        <select value={selectValue1} onChange={(e) => { // выпадающий список выбра первой валюты
            setSelectValue1(e.currentTarget.value)
        }}>
            {Range1.map(r => {
                return <option key={r}>{r}</option> // вывод первого селекта из Range1
            })}
        </select>
        <label htmlFor={"Qty1"}>Отдаю</label>
        <input name={"Qty1"} type="text" value={Qty1String} // первое поле ввода количества валюты

               onChange={(e)=>{onChangeQty1(e)}}
        />
        {Errors.ErrorInput1} {/*ошибки первого поля ввода количества валюты*/}
        <br/>
        <select value={selectValue2} onChange={(e) => {// выпадающий список выбра второй валюты
            setSelectValue2(e.currentTarget.value)
        }}>
            {Range2.map(r => {
                return <option key={r}>{r}</option> // вывод второго селекта из Range2
            })}
        </select>
        <label htmlFor={"Qty2"}>Получаю</label>

        <input name={"Qty2"} type="text" value={Qty2String}  // второе поле ввода количества валюты

               onChange={(e)=>{onChangeQty2(e)}}

        />
        {Errors.ErrorInput2} {/*ошибки второго поля ввода количества валюты*/}

    </div>

    return <div>
        {kurs}
        {inputsRender}
    </div>
}

export default Calculator