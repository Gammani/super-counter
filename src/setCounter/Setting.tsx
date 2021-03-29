import React from "react";
import s from './Setting.module.css'
import {Input} from "../Input/Input";

type PropsType = {
    startValue: number
    endValue: number
    onChangeStartValue: (value: number) => void
    onChangeEndValue: (value: number) => void
    setCounter: (value: number) => void
    redirectControlPanel: () => void
    errorHandler: () => void
    error: string
}

export const Setting: React.FC<PropsType> = (props) => {


    return (
        <div className={s.settingPanel}>
            <div>
                {props.error !== "" && <div className={s.error}>{props.error}</div>}
                <Input title={"Start Value"} value={props.startValue} onChangeValue={props.onChangeStartValue}/>
                <Input title={"Max Value"} value={props.endValue} onChangeValue={props.onChangeEndValue}/>
            </div>
            <div className={s.set}>
                <button className={props.error !== "" ? s.setButtonDis : s.setButton}
                        disabled={props.error !== ""}
                        onClick={props.redirectControlPanel}>Set</button>
            </div>
        </div>
    )
}