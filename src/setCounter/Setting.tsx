import React, {useCallback, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import s from './Setting.module.css'
import {Input} from "../Input/Input";

type PropsType = {
    startValue: number
    endValue: number
    onChangeStartValue: (value: number) => void
    onChangeEndValue: (value: number) => void
    setCounter: (value: number) => void
}

export const Setting: React.FC<PropsType> = (props) => {

    let history = useHistory();

    let [error, setError] = useState<string>("");
    const errorHandler = useCallback(() => {
        // if(props.endValue < 1) {
        //     return setError("Значение не должно равняться нулю!");
        // } else if (props.startValue > props.endValue) {
        //     return setError("start, не должен быть выше max!")
        // } else if (props.startValue === props.endValue) {
        //     return setError("Значения не должны быть равны!")
        // }
        if (props.startValue > props.endValue) {
            return setError("start, не должен быть выше max!")
        }
        return setError("");
    }, [props.startValue, props.endValue]);
    useEffect(() => {
        errorHandler();
    }, [props.endValue, props.startValue, errorHandler])


    const redirectControlPanel = () => {
        props.setCounter(props.startValue);
        history.push('/controlPanel');
    }

    return (
        <div className={s.settingPanel}>
            <div>
                {error !== "" && <div className={s.error}>{error}</div>}
                <Input title={"Start Value"} value={props.startValue} onChangeValue={props.onChangeStartValue}/>
                <Input title={"Max Value"} value={props.endValue} onChangeValue={props.onChangeEndValue}/>
            </div>
            <div className={s.set}>
                <button className={error !== "" ? s.setButtonDis : s.setButton}
                        disabled={error !== ""}
                        onClick={redirectControlPanel}>Set</button>
            </div>
        </div>
    )
}