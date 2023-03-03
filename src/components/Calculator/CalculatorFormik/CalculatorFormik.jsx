import React from "react";
import {Formik, Form} from "formik"; //формик с компонентами и пользовательским хуком
import * as Yup from 'yup' // валидация форм с помошью сторонней библиотеки Yup
//import DisplayFormikState from "../../common/formikCommon/DisplayFormikState"
import {MySelect, MyTextInput} from "../../common/formikCommon/MyFieldsBS"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

let myInitialValues = { // начальные зачения форм
    name: "",
    email: "",
    message: "",
}
let myValidationSchema = Yup.object({ // валидация форм на required, длину и заполнение полей
    email: Yup.string()
        .email('Invalid email address'),
    message: Yup.string()
        .required('Required'),
})

const CalculatorFormik = ({sendFeedBack}) => { // основная компонента с входным колбэком, чтобы забрать данные с форм
    const myOnSubmit = (values, {resetForm}) => { // действия по сабмиту
        sendFeedBack(values) // колбек, который принмает результат ввода формы
        resetForm()// сбросить значение формы после ввода
    }

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
                                <MyTextInput // сообщение в MyPostsBS
                                    label="Ваше имя"
                                    name='name'
                                    type='text'
                                    placeholder='имя'
                                    leftLabelLength='7rem'

                                />

                                <MyTextInput // email
                                    label="Email"
                                    name='email'
                                    type='email'
                                    placeholder='email'
                                    leftLabelLength='7rem'
                                />

                                <MyTextInput // сообщение
                                    label="Сообщение * "
                                    name='message'
                                    type='textarea'
                                    placeholder='сообщение'
                                    //  autoFocus={true}
                                    leftLabelLength='7rem'
                                />

                                <MySelect label='Job Type' name='jobType'>  {/*отрисовка select с option*/}
                                    {[1,2,3].map(num=>{
                                        return <option value={num} key={num}>{num}</option>
                                    })}
                                    <option value=''>Select a job type</option>
                                    <option value='designer'>Designer</option>
                                    <option value='development'>Developer</option>
                                    <option value='product'>Product Manager</option>
                                    <option value='other'>Other</option>
                                </MySelect>

                            </div>
                        </div>
                        {/* <DisplayFormikState/> {/*отображение всего стейта формика*/}
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default CalculatorFormik

