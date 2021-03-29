import React from 'react';
import './App.css';
import ControlPanelContainer from "./ControlPanel/ControlPanelContainer";
import {Redirect, Route} from "react-router-dom";
import SettingContainer from "./setCounter/SettingContainer";

type PropsType = {
    startValue: number
    endValue: number
}

function App(props: PropsType) {

    return (
        <div className={"app"}>
            <h1>Счетчик от {props.startValue} до {props.endValue}</h1>
            <div className={"counter"}>
                <Route exact path="/" render={() => <Redirect to="/controlPanel"/>}/>
                <Route path="/controlPanel" render={() => <ControlPanelContainer />}/>
                <Route path='/setting' render={() => <SettingContainer/>}/>
            </div>
        </div>
    )
}

export default App;