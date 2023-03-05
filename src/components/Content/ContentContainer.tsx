import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import ErrorBoundary from "../common/ErrorBoundary/ErrorBoundary";

const CalculatorContainer = React.lazy(() => import("../Calculator/CalculatorContainer")) // ленивая загрузка компонента только при обращении

type ContentContainerType = {}

const ContentContainer: React.FC<ContentContainerType> = () => { // вынес роутинг контента в отдельную компоненту
    return (<div className='mt-5'> {/*из бутстрапа отступ вверху заголовка*/}
        <ErrorBoundary> {/*Локальный обработчик ошибок ContentContainer*/}
            <Suspense fallback={
                <div>Загрузка...</div>}> {/*Оборачивает компоненты, по которым идет Lazy import и выдает fallback на время загрузки*/}
                <div>
                    <Routes> {/*в зависимости от URL подгрузка разного контента*/}
                        <Route path='' element={<CalculatorContainer/>}/> {/*Основная страница*/}
                    </Routes>
                </div>
            </Suspense>
        </ErrorBoundary>
    </div>)
}
export default ContentContainer
