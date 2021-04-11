import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/redux-store";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {Setting} from "./setCounter/Setting";


function App() {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);
    const endValue = useSelector<AppRootStateType, number>(state => state.counter.endValue);

    return (
        <div className={"app"}>
            <h1>Счетчик от {startValue} до {endValue}</h1>
            <div className={"counter"}>
                <Route exact path="/" render={() => <Redirect to="/controlPanel"/>}/>
                <Route path="/controlPanel" render={() => <ControlPanel />}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    )
}

export default App;