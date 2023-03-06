import React, {ChangeEvent} from "react";
import {Container, Form} from "react-bootstrap";
import {ErrorsType, PairType} from "../Types/commonTypes";
import reversePic from "../common/assets/swg/transfer-svgrepo-com.svg"
import classes from "./Calculator.module.css"
import InputGroup from 'react-bootstrap/InputGroup';
import commonClasses from "../common/CommonClasses/common.module.css";


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
    setQty1String: (Qty1String: string) => void // изменение количества первой валюты в виде строки
    Qty2String: string// строковый ввод количества второрой валюты
    setQty2String: (Qty2String: string) => void // изменение количества первой валюты в виде строки
    reverseCurrency: () => void // функция смены валют
}
const Calculator: React.FC<CalculatorType> = ({
                                                  selectValue1, selectValue2, Qty1, Qty2,
                                                  setQty1AC, setQty2AC, setSelectValue1,
                                                  setSelectValue2, MyPairData, Range1, Range2,
                                                  Errors, Qty1String, setQty1String,
                                                  Qty2String, setQty2String, reverseCurrency
                                              }) => {


    const onChangeQty1 = (e: ChangeEvent<HTMLInputElement>) => {
        const eLocal: string = e.currentTarget.value
        if (Number(eLocal)) setQty1AC(Number(eLocal))
        setQty1String(eLocal)
    }
    const onChangeQty2 = (e: ChangeEvent<HTMLInputElement>) => {
        const eLocal: string = e.currentTarget.value
        if (Number(eLocal)) setQty2AC(Number(eLocal))
        setQty2String(eLocal)
    }

    const kurs: string = MyPairData.IN > MyPairData.OUT // вывод
        // меняем порядок отображения валют в курсе в зависимости от того, что больше
        ? `Курс ${Math.round(100 * MyPairData.IN / MyPairData.OUT) / 100} ${MyPairData.FROM} =  1  ${MyPairData.TO} `
        : `Курс 1  ${MyPairData.FROM} = ${Math.round(100 * MyPairData.OUT / MyPairData.IN) / 100} ${MyPairData.TO}  `

    const inputsRender = <div> {/*отрисовка формы калькулятора*/}
        <Form.Select className="my-2" value={selectValue1} onChange={(e) => { // выпадающий список выбра первой валюты
            setSelectValue1(e.currentTarget.value)
        }}>
            {Range1.map(r => {
                return <option key={r}>{r}</option> // вывод первого селекта из Range1
            })}
        </Form.Select>
        <InputGroup>

            <InputGroup.Text className={classes.labelWidth}
            >Отдаю:</InputGroup.Text>

            <Form.Control name={"Qty1"} type="text" value={Qty1String} // первое поле ввода количества валюты

                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              onChangeQty1(e)
                          }}
            />
        </InputGroup>
        <div
            className={classes.ErrorMessage}>{Errors.ErrorInput1} {/*ошибки первого поля ввода количества валюты*/}</div>


        <img onClick={() => {
            reverseCurrency()
        }} className={classes.reverseImg} src={reversePic} alt="Поменять валюты местами"/>


        <Form.Select className="my-2" value={selectValue2} onChange={(e) => {// выпадающий список выбора второй валюты
            setSelectValue2(e.currentTarget.value)
        }}>
            {Range2.map(r => {
                return <option key={r}>{r}</option> // вывод второго селекта из Range2
            })}
        </Form.Select>

        <InputGroup>
            <InputGroup.Text className={classes.labelWidth}
            >Получаю:</InputGroup.Text>
            <Form.Control name={"Qty2"} type="text" value={Qty2String}  // второе поле ввода количества валюты

                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              onChangeQty2(e)
                          }}
            />
        </InputGroup>
        {Errors.ErrorInput2} {/*ошибки второго поля ввода количества валюты*/}
    </div>

    return <Container className={classes.Container}>
        <h2 className={commonClasses.pageHeader}>Калькулятор</h2> {/*заголовок*/}
        <div className={classes.kurs}>{kurs}</div>
        {/*курс обмена*/}
        <div>{inputsRender}</div>
        {/*форма выбора валют и ввода количества*/}
    </Container>
}

export default Calculator