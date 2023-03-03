import React from "react";
import {Formik, Form} from "formik"; //формик с компонентами и пользовательским хуком
import * as Yup from 'yup' // валидация форм с помошью сторонней библиотеки Yup
import DisplayFormikState from "../../common/formikCommon/DisplayFormikState"
import {MySelect, MyTextInput} from "../../common/formikCommon/MyFieldsBS"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

let myInitialValues = { // начальные зачения форм
    Currency1: "",
    Currency2: "",
    Qty1: "",
    Qty2: "",

}

const CalculatorFormik = ({sendFeedBack}) => { // основная компонента с входным колбэком, чтобы забрать данные с форм
    const myOnSubmit = (values, {resetForm}) => { // действия по сабмиту
        sendFeedBack(values) // колбек, который принмает результат ввода формы
        resetForm()// сбросить значение формы после ввода
    }


    let myValidationSchema = Yup.object({ // валидация форм на required, длину и заполнение полей
        Qty1: Yup.number()
            .typeError('Вводить можно только числа')
            .min(0, 'Минимальное значение 0')// Minamount
            .required('Required')
            .max(10000000000000000000000000000000, 'Не более 10000000000000000000000000000000') // Maxamount
        ,
        Qty2: Yup.number()
            .typeError('Вводить можно только числа')
            .min(0, 'Минимальное значение 0')
            .max(10000000000000000000000000000000, 'Не более 10000000000000000000000000000000')// amount
            .required('Required'),
    })

    return (<div>
            <Formik
                initialValues={myInitialValues}
                validationSchema={myValidationSchema}
                onSubmit={myOnSubmit}
            >

                {({
                      handleReset,// обнуление полей
                  }) => ( // обертка для вывода значений ввода в любом месте формы паралельно (или в итоге)
                    <Form>
                        <div>
                            <div>
                                <MySelect label='Валюта 1' name='Currency1'>  {/*отрисовка select с валютой 1*/}
                                    {[1,2,3].map(num=>{
                                        return <option value={num} key={num}>{num}</option>
                                    })}
                                </MySelect>

                                <MyTextInput // сообщение в MyPostsBS
                                    label="Количество"
                                    name='Qty1'
                                    type='text'
                                    placeholder='валюта 1'
                                    leftLabelLength='7rem'
                                />

                                <MySelect label='Валюта 2' name='Currency2'>  {/*отрисовка select с option*/}
                                    {[1,2,3].map(num=>{
                                        return <option value={num} key={num}>{num}</option>
                                    })}
                                </MySelect>
                                <MyTextInput // сообщение в MyPostsBS
                                    label="Количество"
                                    name='Qty2'
                                    type='text'
                                    placeholder='валюта 2'
                                    leftLabelLength='7rem'
                                />



                            </div>
                        </div>
                        <DisplayFormikState/> {/*отображение всего стейта формика*/}
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default CalculatorFormik

