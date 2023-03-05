import React, {useEffect} from "react";
import {HashRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initialisedAppThunkCreator} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ContentContainer from "../src/components/Content/ContentContainer";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import Container from "react-bootstrap/Container";

type AppProps = {
        initialisedApp: boolean
        initialisedAppThunkCreator: () => void
}
const App: React.FC<AppProps> = ({initialisedApp, initialisedAppThunkCreator})=>{

    useEffect(()=>{
        initialisedAppThunkCreator() // запускаем инициализацию приложения
    },[])// единожды при загрузке

    if (!initialisedApp) { // если приложение еще не инициализировано
        return <Preloader/> // показать статус загрузки
    }
    return ( // иначе показать все приложение
        <div>
            <HashRouter> {/*BrowserRouter для продакшн, HashRouter для gh-pages*/}
                <ErrorBoundary> {/*Общий обработчик ошибок во всем приложении*/}
                    <Container>
                        <ContentContainer/> {/*страницы контента в зависмости от URL*/}
                    </Container>
                </ErrorBoundary>
            </HashRouter>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        initialisedApp: state.app.initialisedApp, // флаг инициализации приложения
    }
}

export default connect(mapStateToProps, {initialisedAppThunkCreator})(App);
// коннектим к app флаг и санки инициализации
