import React from "react";
import s from './ControlPanel.module.css';

type PropsType = {
    iteration: () => void
    reset: () => void
    value: number
}

export function ControlPanel(props: PropsType) {


    return (
        <div className={s.panel}>
            <div className={s.next}>
                <button
                    disabled={props.value === 5}
                        className={props.value < 5? s.nextButton : s.nextButtonDis}
                    onClick={props.iteration}>next</button>
            </div>
            <div className={s.reset}>
                <button
                    disabled={props.value === 0}
                    className={props.value === 0? s.resetButtonDis : s.resetButton}
                    onClick={props.reset}>reset</button>
            </div>
        </div>
    )
}