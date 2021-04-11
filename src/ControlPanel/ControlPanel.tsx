import React, {useCallback} from "react";
import s from './ControlPanel.module.css';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {iterationAC, resetAC} from "../redux/counter-reducer";


export const ControlPanel: React.FC = () => {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter);
    const endValue = useSelector<AppRootStateType, number>(state => state.counter.endValue);
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue);

    const dispatch = useDispatch();
    const iteration = useCallback(() => {
        dispatch(iterationAC());
    }, [dispatch]);
    const reset = useCallback(() => {
        dispatch(resetAC());
    }, [dispatch])

    const history = useHistory();
    const redirectSettings = () => {
        history.push('/setting')
    }

    return (
        <div className={s.panel}>
            <div className={s.display}>
                {counter < endValue && <div className={s.counter}>{counter}</div>}
                {counter === endValue && <div className={s.counterFinish}>{counter}</div>}
            </div>
            <div className={s.next}>
                <button
                    disabled={counter === endValue}
                        className={counter < endValue? s.nextButton : s.nextButtonDis}
                    onClick={iteration}>next</button>
            </div>
            <div className={s.reset}>
                    <button
                        disabled={counter === startValue}
                        className={counter === startValue? s.resetButtonDis : s.resetButton}
                        onClick={reset}>reset</button>
            </div>
            <div className={s.set}>
                <button onClick={redirectSettings}>Set</button>
            </div>
        </div>
    )
}