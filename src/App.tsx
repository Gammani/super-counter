import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {ControlPanel} from "./ControlPanel/ControlPanel";

function App() {
    let [value, setValue] = useState<number>(0);
    const iteration = () => {
        if(value < 5) {
            return setValue(value + 1);
        }
    }
    const reset = () => {
        const reValue = 0;
        setValue(reValue);
    }

    return (
        <div className={"counter"}>
            <Counter value={value}/>
            <ControlPanel iteration={iteration} reset={reset} value={value}/>
        </div>
    )
}

export default App;
