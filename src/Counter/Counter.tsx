import React from "react";
import s from './Counter.module.css';

type PropsType = {
    value: number
}

export function Counter(props: PropsType) {

    return (
        <div className={s.display}>
            {props.value < 5 && <div className={s.counter}>{props.value}</div>}
            {props.value === 5 && <div className={s.counterFinish}>{props.value}</div>}
        </div>
    )
}