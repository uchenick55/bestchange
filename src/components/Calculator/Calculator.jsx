import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import commonClasses from "../common/CommonClasses/common.module.css";
import {connect} from "react-redux";
import CalculatorFormik from "./CalculatorFormik/CalculatorFormik";

const Calculator = ({MyPairData}) => {
    const home = <div>
        <Container>
            <h2 className={commonClasses.pageHeader}>Home</h2>
            <CalculatorFormik/>
        </Container>
    </div>

    return (<div>
        {home}
    </div>)
}
const mapStateToProps = (state) => {
    return {
        MyPairData: state.bestChange.MyPairData// данные выбраной пары
    }
}

export default connect(mapStateToProps, null)(Calculator)

