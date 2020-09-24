import React from "react";
import s from './Counter.module.css'

type PropsType = {
    counter: number | null
    finish: number | null
}

let Dial = (props: PropsType) => {

    return (
        <div>
            {props.counter && <div>{props.counter}</div>}
            {props.finish && <div className={s.finish}>{props.finish}</div>}

        </div>
    );
}

export default Dial;