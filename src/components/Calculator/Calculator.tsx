import React from "react";
import {PairType} from "../Types/commonTypes";


type CalculatorType = {
    selectValue1: string
    selectValue2: string
    Qty1: number
    Qty2: number
    setQty1AC: (Qty1: number) => void
    setQty2AC: (Qty2: number) => void
    selectValue1AC: (selectValue1: string) => void,
    selectValue2AC: (selectValue2: string) => void,
    MyPairData: PairType
}
let Calculator: React.FC<CalculatorType> = ({
                                                selectValue1, selectValue2, Qty1, Qty2,
                                                setQty1AC, setQty2AC, selectValue1AC,
                                                selectValue2AC, MyPairData
                                            }) => {
    return <div>
        <select onChange={(e) => {
            selectValue1AC(e.currentTarget.value)
        }}>
            <option key={MyPairData.TO}>{MyPairData.FROM}</option>
            <option key={"LTC"}>LTC</option>
            <option key={"ETH"}>ETH</option>
        </select>
        <input type="text" value={Qty1} onChange={(e) => {
            setQty1AC(Number(e.currentTarget.value))
        }}/>
        <br/>
        <select onChange={(e) => {
            selectValue2AC(e.currentTarget.value)
        }}>
            <option key={MyPairData.TO}>{MyPairData.TO}</option>
            <option key={"LTC"}>LTC</option>
            <option key={"ETH"}>ETH</option>
        </select>
        <input type="text" value={Qty2} onChange={(e) => {
            setQty2AC(Number(e.currentTarget.value))
        }}/>
    </div>
}

export default Calculator