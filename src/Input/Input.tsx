import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type PropsType = {
    title: string
    value: number
    onChangeValue: (value: number) => void
}


export const Input: React.FC<PropsType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue(+e.currentTarget.value);
    }
    return (
        <>
            <label className={s.main}>
                <span className={s.title}>{props.title}</span>
                <input className={s.input} type="number" min="0" value={props.value} onChange={onChangeHandler}/>
            </label>
        </>
    )
}