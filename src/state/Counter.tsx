import React from 'react';
import s from './Counter.module.css';
import Dial from "./Dial";
import ControlPanel from "./ControlPanel";


type PropsType = {
    counter: number | null
    finish: number | null
    changeCounter: (counter: number | null) => void
    changeReset: () => void
}

const Counter = (props: PropsType) => {

    return (
        <div className={s.counter}>
            <Dial counter={props.counter} finish={props.finish}/>
            <ControlPanel counter={props.counter}
                          finish={props.finish}
                          changeCounter={props.changeCounter}
                          changeReset={props.changeReset}/>
        </div>
    );
}

export default Counter;