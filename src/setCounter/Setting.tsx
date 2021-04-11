import React, {useCallback, useEffect} from "react";
import s from './Setting.module.css'
import {Input} from "../Input/Input";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {errorHandlerAC, onChangeEndValueAC, onChangeStartValueAC, setCounterAC} from "../redux/counter-reducer";



export const Setting: React.FC = () => {

    const endValue = useSelector<AppRootStateType, number>(state => state.counter.endValue);
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);
    const error = useSelector<AppRootStateType, string>(state => state.counter.error);

    const dispatch = useDispatch();
    const setCounter = useCallback((value: number) => {
        dispatch(setCounterAC(value));
    }, [dispatch]);
    const onChangeStartValue = useCallback((value: number) => {
        dispatch(onChangeStartValueAC(value));
    }, [dispatch]);
    const onChangeEndValue = useCallback((value: number) => {
        dispatch(onChangeEndValueAC(value));
    }, [dispatch]);
    const errorHandler = useCallback(() => {
        dispatch(errorHandlerAC());
    }, [dispatch]);

    useEffect(() => {
        errorHandler();
    }, [endValue, startValue, errorHandler])

    let history = useHistory();
    const redirectControlPanel = () => {
        setCounter(startValue);
        history.push('/controlPanel');
    }

    return (
        <div className={s.settingPanel}>
            <div>
                {error !== "" && <div className={s.error}>{error}</div>}
                <Input title={"Start Value"} value={startValue} onChangeValue={onChangeStartValue}/>
                <Input title={"Max Value"} value={endValue} onChangeValue={onChangeEndValue}/>
            </div>
            <div className={s.set}>
                <button className={error !== "" ? s.setButtonDis : s.setButton}
                        disabled={error !== ""}
                        onClick={redirectControlPanel}>Set</button>
            </div>
        </div>
    )
}