import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import ErrorBoundary from "../common/ErrorBoundary/ErrorBoundary";
//import Calculator from "../Calculator/Calculator";
import classes from "./ContentContainer.module.css"

const Home = React.lazy(() => import("../Calculator/CalculatorContainer"))

const ContentContainer = () => { // вынес роутинг контента в отдельную компоненту
    return (<div>
        <ErrorBoundary> {/*Локальный обработчик ошибок ContentContainer*/}
            <Suspense fallback={
                <div>Загрузка...</div>}> {/*Оборачивает компоненты, по которым идет Lazy import и выдает fallback на время загрузки*/}
                <div className={classes.contentContainer}>
                    <Routes> {/*в зависимости от URL подгрузка разного контента*/}
                        <Route path='' element={<Home/>}/> {/*Основная страница*/}
                    </Routes>
                </div>
            </Suspense>
        </ErrorBoundary>
    </div>)
}
export default ContentContainer
