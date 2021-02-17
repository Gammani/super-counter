import React, {useState} from 'react';
import './App.css';
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import {Setting} from "./setCounter/Setting";

function App() {
    let [startValue, setStartValue] = useState<number>(0);
    let [endValue, setEndValue] = useState<number>(5);
    let [counter, setCounter] = useState<number>(startValue);

    const iteration = () => {
        if (startValue < endValue) {
            return setCounter(counter + 1);
        }
    }
    const reset = () => {
        setCounter(startValue);
    }

    const onChangeStartValue = (value: number) => {
        return setStartValue(value);
    }
    const onChangeEndValue = (value: number) => {
        return setEndValue(value);
    }


    return (
        <BrowserRouter>
            <div className={"app"}>
                <h1>Счетчик от {startValue} до {endValue}</h1>
                <div className={"counter"}>
                    <Route exact path="/" render={() => <Redirect to="/controlPanel"/>}/>
                    <Route path="/controlPanel" render={() => <ControlPanel
                        iteration={iteration}
                        reset={reset}
                        startValue={startValue}
                        endValue={endValue}
                        counter={counter}
                    />}/>
                    <Route path='/setting' render={() => <Setting
                        startValue={startValue}
                        endValue={endValue}
                        onChangeStartValue={onChangeStartValue}
                        onChangeEndValue={onChangeEndValue}
                        setCounter={setCounter}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;